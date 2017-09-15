//npm i -g typescript
var t=[4,7,2,9,10,"hello"];

t.forEach(x=>console.log(x));

var arr:number[]=[5,2,9,10];
arr.forEach((x)=>{
    console.log(x)
});

class Car{
    model:string;
    price:number;
    constructor(model:string,price:number){
        this.model=model;
        this.price=price;
    }
    displayCar(){
        console.log(this.model + "-"+ this.price)
    }
}
var c1=new Car("BMW",90909);
var cars:Car[]=[c1,new Car("Maruti",6000),new Car("Ford",7000),new Car("Audi",8000)];

cars.forEach(x=>x.displayCar());
var filteredCars:Car[]=cars.filter(x=>x.price>7000);
console.log("-----------------------------------");
filteredCars.forEach(x=>x.displayCar());

var x:string|number=90;
x="hello";
//x=[7,6];

interface Person{
    age:number;
    name:string;
    display();
}

var student:Person={
    name:'',
    age:90,
    display:function(){

    }
}

class Suv extends Car{
    bhp:number;
    constructor(model:string,price:number,bhp:number){
        super(model,price);
        this.bhp=bhp;
    }
    drive(){
        console.log(this.model+" driving SUV at "+this.bhp )
    }
    
}
var s1=new Suv("Ford",70000,9);
s1.displayCar()
s1.drive()