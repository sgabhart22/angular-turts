import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  @ViewChild('nameInput') nameInput: MdcTextField;

  constructor(public dialogRef: MdcDialogRef<AddDialogComponent>,
  			  @Inject(MDC_DIALOG_DATA) public data: any) { }
			  
  ngOnInit() { 
    this.addForm = new FormGroup({
	  name: new FormControl({ value: '', disabled: false }, Validators.required)
	});
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updateForm() {
    if(!this.addForm.valid) {
	  if(!this.nameInput.valid) {
	    this.nameInput.setValid(false);
	  }

	  return;
	}

	this.closeDialog();
	} // updateForm
}
