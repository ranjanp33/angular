import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';


export const routingComponents = [
  AboutComponent,
  HomeComponent,
  ContactComponent,
  NotfoundComponent
];

export const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/notfound'}
];