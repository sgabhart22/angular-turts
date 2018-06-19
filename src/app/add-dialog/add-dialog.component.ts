import { Component, OnInit, Inject } from '@angular/core';
import { MdcDialog, 
		 MdcDialogComponent, 
		 MdcDialogRef,
		 MDC_DIALOG_DATA } from '@angular-mdc/web';
		 
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(public dialogRef: MdcDialogRef<AddDialogComponent>,
  			  @Inject(MDC_DIALOG_DATA) public data: any) { }
			  
  ngOnInit() { }

}
