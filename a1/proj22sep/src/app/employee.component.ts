import {Component} from '@angular/core';
@Component({
    selector:'app-employee',
    templateUrl:'./employee.component.html',
    styles:["p{ color:red;}"],
    styleUrls:["./employee.component.css"]
})
export class EmployeeComponent {
    text:string="My Text";
    val:number=1000;
    mytype:string='number';
    mystyle:string="blue"


    setText(){
        this.text="New text";
    }
}