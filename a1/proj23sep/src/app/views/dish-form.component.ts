import {Component} from '@angular/core';
import {Dish} from '../shared/dish';
import {DishCollection} from '../shared/dishes';
import {DishService} from '../services/dish.service'
import {Router} from '@angular/router'
@Component({
    templateUrl:'./dish-form.component.html',
    selector:'app-dish-form',
    styleUrls:['./form.css']
})
export class DishFormComponent{
    dish:Dish;

    constructor(private dishService:DishService, private router:Router){
        this.dish=new Dish();
    }

    submitForm(){
        console.log(this.dish);
        //DishCollection.dishes.push(this.dish);
        this.dishService.dishes.push(this.dish);
        this.router.navigate(["/dish"]);
    }
}