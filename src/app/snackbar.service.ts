import { Injectable } from '@angular/core';
import { MdcSnackbar } from '@angular-mdc/web';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  message = 'Added to Turts';
  action = 'OK';
  multiline = false;
  dismissOnAction: boolean = true;
  focusAction = false;		
  alignStart = '';
  actionOnBottom = false;

  constructor(private sb: MdcSnackbar) { }

  show() {
    const snackbarRef = this.sb.show(this.message, this.action, {
	  align: this.alignStart,
      multiline: this.multiline,
	  dismissOnAction: this.dismissOnAction,
	  focusAction: this.focusAction,
	  actionOnBottom: this.actionOnBottom
	});
  }
}
