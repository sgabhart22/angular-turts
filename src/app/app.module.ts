import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TurtlesComponent } from './turtles/turtles.component';
import { MdcCardModule,
		 MdcIconModule,
		 MdcIconButtonModule,
		 MdcRippleModule,
		 MdcAppBarModule,
		 MdcFabModule,
		 MdcDialogModule,
		 MdcDrawerModule,
		 MdcListModule,
		 MdcFormFieldModule,
		 MdcTextFieldModule,
		 MdcSnackbarModule} from '@angular-mdc/web';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TurtlesComponent,
	NavbarComponent,
	AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
	AngularFireDatabaseModule,
	AngularFireAuthModule,
	FormsModule,
	ReactiveFormsModule,
	MdcCardModule,
	MdcIconModule,
	MdcIconButtonModule,
	MdcRippleModule,
	MdcAppBarModule,
	MdcFabModule,
	MdcDialogModule,
	MdcDrawerModule,
	MdcListModule,
	MdcFormFieldModule,
	MdcTextFieldModule,
	MdcSnackbarModule
  ],
  providers: [],
  entryComponents: [AddDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
