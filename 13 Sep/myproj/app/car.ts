class Car{
    model:string;
    price:number;
    constructor(model:string,price:number){
        this.model=model;
        this.price=price;
    }

    showCar(){
        console.log("Car model - "+this.model+" - Price "+ this.price)
    }
}
