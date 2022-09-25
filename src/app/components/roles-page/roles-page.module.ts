import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPageComponent } from './roles-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RolesPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class RolesPageModule { }
