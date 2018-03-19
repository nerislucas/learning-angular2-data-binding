import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
