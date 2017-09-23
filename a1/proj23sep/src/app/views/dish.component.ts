import {Component} from '@angular/core';
import {DishCollection} from '../shared/dishes';
@Component({
    templateUrl:'./dish.component.html',
    selector:'app-dishview'
})
export class DishComponent{
    dishes=(new DishCollection()).dishes;
}