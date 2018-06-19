import { Component, OnInit, Inject } from '@angular/core';
import { Turtle } from '../turtle';
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
  const dialogRef = this.dialog.open(AddDialog, {
      escapeToClose: this.escapeToClose,
	  clickOutsideToClose: this.clickOutsideToClose,
    });
  }
}

@Component({
  template: `
    <mdc-dialog>
    <mdc-dialog-header>
      <mdc-dialog-header-title>
		Template for turt additions
      </mdc-dialog-header-title>
    </mdc-dialog-header>
    <mdc-dialog-body>
		Simple dialog skeleton works!
    </mdc-dialog-body>
    <mdc-dialog-footer>
      <button mdc-dialog-button [cancel]="true">Cancel</button>
      <button mdc-dialog-button [accept]="true">Submit</button>
    </mdc-dialog-footer>
  </mdc-dialog>
  `,
})
export class AddDialog {
  constructor(public dialogRef: MdcDialogRef<AddDialog>,
  			  @Inject(MDC_DIALOG_DATA) public data: any) { }
}
