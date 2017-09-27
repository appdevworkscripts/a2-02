import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {ContactsComponent} from './contacts.component';
import {ContactComponent} from './contact.component';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,ContactsComponent,ContactComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([{
      path:'',
      component:ContactsComponent
    },{
      path:'contact/:contact_id',
      component:ContactComponent
    }]),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
