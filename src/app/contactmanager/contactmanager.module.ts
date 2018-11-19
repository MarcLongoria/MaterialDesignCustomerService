import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactManagerModule'},
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  {path: '**', redirectTo: 'contactmanager'}
];


@NgModule({
  imports: [
    CommonModule, MaterialModule, FlexLayoutModule, FormsModule, RouterModule.forChild(routes)
  ],
  declarations: [ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class ContactmanagerModule { }
