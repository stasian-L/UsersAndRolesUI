import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleModel } from '../models/role-model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  baseUrl = 'https://localhost:7180/api/Roles';

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(this.baseUrl);
  }

  addRole(role: RoleModel): Observable<RoleModel> {
    role.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<RoleModel>(this.baseUrl, role);
  }

  updateRole(role: RoleModel): Observable<RoleModel> {
    return this.http.put<RoleModel>(this.baseUrl + '/' + role.id, role);
  }

  deleteRole(id: string): Observable<RoleModel> {
    return this.http.delete<RoleModel>(this.baseUrl + '/' + id);
  }
}
