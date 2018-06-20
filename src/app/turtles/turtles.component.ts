import { Component, OnInit } from '@angular/core';

import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { TurtleService } from './turtle.service';

import { Observable } from 'rxjs';
import { MdcDialog, 
		 MdcDialogRef } from '@angular-mdc/web';

@Component({
  selector: 'app-turtles',
  providers: [ TurtleService ],
  templateUrl: './turtles.component.html',
  styleUrls: ['./turtles.component.scss']
})
export class TurtlesComponent implements OnInit {
  turtlesObservable: Observable<any[]>;

  escapeToClose: boolean = true;
  clickOutsideToClose: boolean = true;

  constructor(private turtleService: TurtleService,
  			  public dialog: MdcDialog) { }

  ngOnInit() {
    this.getTurtles();
  }

  getTurtles(): void {
    this.turtlesObservable = this.turtleService.getTurtles()
  }

  openDialog() {
  const dialogRef = this.dialog.open(AddDialogComponent, {
      escapeToClose: this.escapeToClose,
	  clickOutsideToClose: this.clickOutsideToClose,
    });
  }
}
