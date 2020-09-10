import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Turtle } from '../turtle';
import { TurtleService } from '../turtles/turtle.service';
import { SnackbarService } from '../snackbar.service';

import { MdcDialog, 
		 MdcDialogComponent, 
		 MdcDialogRef,
		 MDC_DIALOG_DATA,
		 MdcTextField } from '@angular-mdc/web';
		 
@Component({
  selector: 'app-add-dialog',
  providers: [TurtleService, SnackbarService],
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;

  @ViewChild('inputName', {static: true}) inputName: MdcTextField;
  @ViewChild('inputClass', {static: true}) inputClass: MdcTextField;
  @ViewChild('inputDesc', {static: true}) inputDesc: MdcTextField;
  @ViewChild('inputUrl', {static: true}) inputUrl: MdcTextField;

  constructor(public dialogRef: MdcDialogRef<AddDialogComponent>,
			  @Inject(MDC_DIALOG_DATA) public data: any,
		      private turtleService: TurtleService,
  			  private snackbarService: SnackbarService) { }
			  
  ngOnInit() {
    this.addForm = new FormGroup({
		inputName: new FormControl({ value: '', disabled: false }, Validators.required),
		inputClass: new FormControl({ value: '', disabled: false }, Validators.required),
		inputDesc: new FormControl({ value: '', disabled: false }, Validators.required),
		inputUrl: new FormControl({ value: '', disabled: false }, Validators.required)
	});
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateForm() {
    this.submitted = true;
	this.closeDialog();
  } // updateForm
				
	onSubmit() {
	  if(!this.addForm.valid) {
	    if(!this.inputName.valid) {
		  this.inputName.setValid(false);
		}
		if(!this.inputClass.valid) {
		  this.inputClass.setValid(false);	  
		}
	    if(!this.inputDesc.valid) {
		  this.inputDesc.setValid(false);  
		}
		if(!this.inputUrl.valid) {
		  this.inputUrl.setValid(false);
		}

		return;
	  }		
			
	  var mName = this.inputName.getValue();
	  var mClass = this.inputClass.getValue();
	  var mDesc = this.inputDesc.getValue();
	  var mUrl = this.inputUrl.getValue();
	  var mFav = false;
	
	  var mTurtle = new Turtle(mName, mClass, mDesc, mUrl, mFav);
	  console.log(JSON.stringify(mTurtle));

	  this.turtleService.addTurtle(mTurtle);

	  this.submitted = true;
	  this.closeDialog();
      this.snackbarService.show();
	}
				 
}
