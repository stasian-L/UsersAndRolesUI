import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesPageComponent } from './components/roles-page/roles-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersPageComponent } from './components/users-page/users-page.component';

const routes: Routes = [
  {path: 'users', component: UsersPageComponent},
  {path: 'roles', component: RolesPageComponent},
  {path: 'user-form', component: UserFormComponent},
  {path: 'user-form/:id', component: UserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
