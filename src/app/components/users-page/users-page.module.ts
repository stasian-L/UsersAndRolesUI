import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { MatListModule } from '@angular/material/list';
import { UsersPageComponent } from './users-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { UserFormModule } from '../user-form/user-form.module';

@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UserFormModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    UsersPageComponent
  ] 
})
export class UsersPageModule { }
