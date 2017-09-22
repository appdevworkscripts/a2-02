import {Component} from '@angular/core';
@Component({
    selector:'special-component',
    templateUrl:'./myspeacial.component.html'
})
export class MySpecialComponent{
    x:number=3.459;
    y:number=10/3;
    price:number=100/3;
    name:string="happy";
    bday:Date=new Date(2017,7,7);
}