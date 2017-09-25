import {Component} from '@angular/core';
import {DishCollection} from '../shared/dishes';
import {DishService} from '../services/dish.service'
import {Dish} from '../shared/dish';
@Component({
    templateUrl:'./dish.component.html'
})
export class DishComponent{
   // dishes=DishCollection.dishes;
   dishes:Dish[];
    constructor(private dishService:DishService){
        this.dishes=this.dishService.dishes;
    }
}


