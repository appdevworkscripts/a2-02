import {Component,Input} from '@angular/core';
@Component({
    templateUrl:'./dish-detail.component.html',
    selector:'app-dish-detail'
})
export class DishDetailComponent{

    // <app-dish-detail [dish]=""></app-dish-detail>
    @Input()
    dish;
}