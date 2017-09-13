import {Car} from './car';

export class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    showPerson(){
        console.log("Person - "+this.name+" age - "+this.age);
    }
    driveCar(){
        var c1=new Car("Maruti",900000,"Alto");
        console.log("Driving")
        c1.showCar();
    }
}
