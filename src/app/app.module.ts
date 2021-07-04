import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickList } from './pickList/pickList.component';

import { PickListModule } from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [
    AppComponent,
    PickList
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PickListModule,
    ButtonModule,
    ToggleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
