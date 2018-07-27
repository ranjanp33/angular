import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserappComponent } from './userapp/userapp.component';
import { HeaderComponent } from './header/header.component';
import { SquarerootPipe } from './squareroot.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { SortbyPipe } from './sortby.pipe';
import { UserService } from './user.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { routingComponents, appRoutes } from './app-routline.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    UserappComponent,
    HeaderComponent,
    SquarerootPipe,
    OrderbyPipe,
    SortbyPipe,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    routingComponents,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
