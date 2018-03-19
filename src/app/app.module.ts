import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { OutputPropertyBindingComponent } from './output-property-binding/output-property-binding.component';
import { CountComponent } from './count/count.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    PropertyBindingComponent,
    OutputPropertyBindingComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
