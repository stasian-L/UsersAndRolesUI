import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private userService: UsersService, private router: Router) { }
  user: UserModel = {
    id: '',
    name: '',
    roles: []
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    });
  }

  getRoles(user: UserModel): string {
    return user.roles?.map(x => x.name).join(', ') ?? '';
  }

  onRemove(id: string) {
    this.userService.deleteUser(id).subscribe(response =>
      this.getAllUsers());
    console.log('User deleted successfully!');
  }

  route(user?: UserModel) {
    this.router.navigate(['/user-form', user?.id ?? ""]);
  }
}
