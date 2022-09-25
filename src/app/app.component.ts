import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<UserModel[]>('https://localhost:7180/api/Users').subscribe(x => {
      console.error(x);
      this.users = x;
    })
  }

  title = 'UsersAndRoles.UI';
}
