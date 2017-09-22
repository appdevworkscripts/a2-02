import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee.component'
import { MySpecialComponent} from './myspecialdata.component';
import {CapitalizePipe} from './capitalize.pipe';
import {MycomponentComponent} from './mycomponent.component'
@NgModule({
  declarations: [
    AppComponent,EmployeeComponent, MySpecialComponent,CapitalizePipe,MycomponentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
