import {Component,Input} from '@angular/core';
@Component({
    templateUrl:'./dish-detail.component.html',
    selector:'app-dish-detail'
})
export class DishDetailComponent{

    // <app-dish-detail [dish]=""></app-dish-detail>
    @Input()
    dish;


    displayedDish;
    constructor(){
        this.showDish().then(res=>{
            console.log(res);
        },rej=>{
            console.log(rej);
        });
    }
    hideDish(){

    }
    showDish(){               
        return new Promise(resolve=>{
            setTimeout(()=>{
                this.displayedDish=this.dish;   
                resolve('successfully called');         
            },2000); 
        });
    }
}