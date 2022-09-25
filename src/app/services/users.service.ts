import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'https://localhost:7180/api/Users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl);
  }

  getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.baseUrl + '/' + id);

  }

  addUser(user: UserModel): Observable<UserModel> {
    user.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<UserModel>(this.baseUrl, user);
  }

  updateUser(id: string, user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(this.baseUrl + '/' + id, user);
  }

  deleteUser(id: string): Observable<UserModel> {
    return this.http.delete<UserModel>(this.baseUrl + '/' + id);
  }


}
