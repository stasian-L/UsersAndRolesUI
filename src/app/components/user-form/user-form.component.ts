import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RoleModel } from 'src/app/models/role-model';
import { UserModel } from 'src/app/models/user-model';
import { RolesService } from 'src/app/services/roles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: UserModel = {
    id: '',
    name: '',
    roles: []
  }

  allRoles!: RoleModel[];
  form!: FormGroup;

  constructor(private fb: FormBuilder, private activatedroute: ActivatedRoute, private router: Router, private usersService: UsersService, private rolesService: RolesService) {
    this.activatedroute.params.subscribe(data => {
      if (!data['id']) {
        this.initForm();
        return;
      }

      this.usersService.getUser(data['id']).subscribe(response => {
        this.user = response; console.log(response);
        this.initForm();
      })
    })
  }

  private initForm() {
    this.form = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(6)]],
      roles: [this.user.roles?.map(x => x.id)],
    });

    this.form.patchValue({
      name: this.user.name,
      roles: this.user.roles?.map(x => x.id)
    });
  }

  ngOnInit(): void {
    this.rolesService.getAllRoles().subscribe(response =>
      this.allRoles = response);
  }

  onSubmit() {
    if(!this.user.id) {
       this.createUser();
      console.log('User created successfully!');
    }
    else {
      this.updateUser();
      console.log('User updated successfully!');
    }
  }

  updateUser() {
    const selectedRoleIds: string[] = this.form.value.roles;
    const selectedRoles = this.allRoles.filter(x=>selectedRoleIds.includes(x.id));

    const user = new UserModel({
      id: this.user.id,
      name: this.form.value.name,
      roles: selectedRoles
    })
    this.usersService.updateUser(user.id!, user).subscribe(response=>{
      this.router.navigateByUrl('users');
    })
  }

  createUser() {
    const selectedRoleIds: string[] = this.form.value.roles;
    const selectedRoles = this.allRoles.filter(x=>selectedRoleIds.includes(x.id));
    const userModel = new UserModel({
      name: this.form.value.name,
      roles: selectedRoles
    })
    this.usersService.addUser(userModel).subscribe(response=>{
      this.router.navigateByUrl('users');
    })
  }
}
