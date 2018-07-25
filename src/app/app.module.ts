import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserappComponent } from './userapp/userapp.component';
import { HeaderComponent } from './header/header.component';
import { SquarerootPipe } from './squareroot.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { SortbyPipe } from './sortby.pipe';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserappComponent,
    HeaderComponent,
    SquarerootPipe,
    OrderbyPipe,
    SortbyPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
