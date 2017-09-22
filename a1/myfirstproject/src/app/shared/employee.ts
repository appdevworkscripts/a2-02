export class Employee{
    name:string;
    age:number;
    desig:string;
    gender:string;
    constructor(name:string,age:number,desig:string,gender:string){
        this.name=name;
        this.age=age;
        this.desig=desig;
        this.gender=gender;
    }
    showEmployee(){
        console.log(this.name+' - '+this.age)
    }
}