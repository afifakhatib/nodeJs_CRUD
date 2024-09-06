import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBar : MatSnackBar
  ) { }

  openSnackBar(msg : string){
    this._snackBar.open(msg , 'CLOSE' , {
      duration : 1500,
      horizontalPosition : 'center',
      verticalPosition : 'top'
    })
  }
}
