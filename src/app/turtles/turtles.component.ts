import { Component, OnInit, Inject } from '@angular/core';

import { Turtle } from '../turtle';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MdcDialog, 
		 MdcDialogComponent, 
		 MdcDialogRef,
		 MDC_DIALOG_DATA } from '@angular-mdc/web';

@Component({
  selector: 'app-turtles',
  templateUrl: './turtles.component.html',
  styleUrls: ['./turtles.component.scss']
})
export class TurtlesComponent implements OnInit {
  turtlesObservable: Observable<any[]>;
  escapeToClose: boolean = true;
  clickOutsideToClose: boolean = true;

  constructor(private db: AngularFireDatabase,
  			  public dialog: MdcDialog) { }

  ngOnInit() {
    this.turtlesObservable = this.getTurtles('/turtles');
  }

  getTurtles(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

  openDialog() {
  const dialogRef = this.dialog.open(AddDialogComponent, {
      escapeToClose: this.escapeToClose,
	  clickOutsideToClose: this.clickOutsideToClose,
    });
  }
}
