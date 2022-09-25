import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleModel } from 'src/app/models/role-model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.scss']
})
export class RolesPageComponent implements OnInit {
  roles: RoleModel[] = [];

  role: RoleModel = {
    id: '',
    name: ''
  }

  constructor(private roleService: RolesService) { }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(): void {
    this.roleService.getAllRoles().subscribe(
      response => {
        this.roles = response;
        console.log(response);
      }
    )
  }

  populateInput(role: RoleModel) {
    Object.assign(this.role, role);
  }

  createEditRole() {
    if (!this.role.name)
      return;

      let response$: Observable<RoleModel>;

    if (this.role.id) {
      response$ = this.roleService.updateRole(this.role);
      console.log('Role updated successfully!');
    }
    else {
      response$ = this.roleService.addRole(this.role);
      console.log('Role created successfully!');
    }

    response$.subscribe(()=> this.getAllRoles());

    this.role = {
      id: '',
      name: ''
    }
  }

  onRemove(id: string) {
    this.roleService.deleteRole(id).subscribe(response => {
      console.log('Role deleted successfully!')
      this.getAllRoles()
    });

    this.role = {
      id: '',
      name: ''
    }
  }

  onRoleInputChange(event:any):void {
    this.role.name = event.target.value;
  }

}
