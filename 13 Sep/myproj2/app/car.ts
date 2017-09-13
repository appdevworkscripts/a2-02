export class Car{
    model:string;
    price:number;
    variant:string;
    constructor(model:string,price:number,variant:string){
        this.model=model;
        this.price=price;
        this.variant=variant;
    }

    showCar(){
        console.log("Car model - "+this.model+" - Price "+ this.price+" Variant "+this.variant)
    }
}
