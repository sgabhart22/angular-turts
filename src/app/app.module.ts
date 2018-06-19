import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TurtlesComponent, AddDialog } from './turtles/turtles.component';
import { MdcCardModule,
		 MdcIconModule,
		 MdcIconButtonModule,
		 MdcRippleModule,
		 MdcAppBarModule,
		 MdcFabModule,
		 MdcDialogModule } from '@angular-mdc/web';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TurtlesComponent,
	NavbarComponent,
	AddDialog
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
	AngularFireDatabaseModule,
	AngularFireAuthModule,
	MdcCardModule,
	MdcIconModule,
	MdcIconButtonModule,
	MdcRippleModule,
	MdcAppBarModule,
	MdcFabModule,
	MdcDialogModule
  ],
  providers: [],
  entryComponents: [AddDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
