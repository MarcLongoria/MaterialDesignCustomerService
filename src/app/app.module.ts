import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ContactmanagerComponent } from './contactmanager.component';


const routes : Routes = [
  {path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactManagerModule'},
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  {path: '**', redirectTo: 'contactmanager'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactmanagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
