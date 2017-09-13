

class Person{
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
        var c1=new Car("Maruti",900000);
        c1.showCar();
    }
}
