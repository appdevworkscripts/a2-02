import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {ContactsComponent} from './contacts.component';
import {ContactComponent} from './contact.component';
import {ContactFormComponent} from './contact-form.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ZoomDirective} from './zoom.directive';
import {MyFormComponent} from './myform.component';
import {TestComponent} from './test.component'
import {FilterContactComponent} from './filter-contact.component'
@NgModule({
  declarations: [
    AppComponent,ContactsComponent,ContactComponent,ContactFormComponent,ZoomDirective,MyFormComponent,TestComponent,FilterContactComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([{
      path:'',
      component:ContactsComponent
    },{
      path:'contact/:contact_id',
      component:ContactComponent
    },{
      path:'newcontact',
      component:ContactFormComponent
    },{
      path:'myform',
      component:MyFormComponent
    }]),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
