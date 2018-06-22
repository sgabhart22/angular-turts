import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Turtle } from '../turtle';

import { MdcDialog, 
		 MdcDialogComponent, 
		 MdcDialogRef,
		 MDC_DIALOG_DATA,
		 MdcTextField } from '@angular-mdc/web';
		 
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  @ViewChild('inputName') inputName: MdcTextField;

  constructor(public dialogRef: MdcDialogRef<AddDialogComponent>,
  			  @Inject(MDC_DIALOG_DATA) public data: any) { }
			  
  ngOnInit() { 
    this.addForm = new FormGroup({
	  inputName: new FormControl({ value: '', disabled: false }, Validators.required)
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
		return;
	  }		
			
	  
	
	  this.submitted = true;
	  this.closeDialog();
	}
				 
}
