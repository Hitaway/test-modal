import { Component } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: any;

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
    this.data = data;
  }

  public openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = this.data;
    this.matDialog.open(ModalComponent, dialogConfig);
  }
}
