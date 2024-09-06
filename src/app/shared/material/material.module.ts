import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';



const mat = [
  MatSnackBarModule,
  MatIconModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...mat
  ],
  exports : [
    ...mat
  ]
})
export class MaterialModule { }
