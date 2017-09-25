import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {HomeComponent} from './views/home.component';
import {ProfileComponent} from './views/profile.component';
import {DishComponent} from './views/dish.component';
import {DishDetailComponent} from './dish-detail/dish-detail.component';
import {RouterModule} from '@angular/router';
import {DishFormComponent} from './views/dish-form.component';
import {FormsModule} from '@angular/forms';
import {DishService} from './services/dish.service';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,ProfileComponent,HomeComponent,DishComponent,DishDetailComponent,DishFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([{
      path:"home",
      component:HomeComponent
    },{
      path:'profile',
      component:ProfileComponent
    },{
      path:'dish',
      component:DishComponent
    },{
      path:'dishform',
      component:DishFormComponent
    }])
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
