import {Component} from '@angular/core';
import {Person} from './shared/person';
@Component({
    selector:'my-component',
    templateUrl:'./mycomponent.component.html'
})
export class MycomponentComponent {
    person:Person=new Person("Abhay",20,"798978989");
    showDetail:boolean=false;
    persons:Person[]=[
        new Person("Abhay",20,"798978989"),
        new Person("Abhishek",25,"798978989"),
        new Person("Mayank",20,"798978989"),
        new Person("Priyanka",25,"798978989"),
        new Person("Ashish",21,"798978989"),
    ]
}