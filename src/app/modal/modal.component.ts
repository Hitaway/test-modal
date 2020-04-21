import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private _data: any;
  private _currentId: string;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this._data = data;
    this._currentId = data[0]; // replace by current ID
  }

  ngOnInit() {
    console.log(this._data);
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public previous(): void {
    console.log("previous");
  }

  public next(): void {
    console.log("next");
  }

}