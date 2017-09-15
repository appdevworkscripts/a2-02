interface Person{
    age:number;
    name:string;
    display();
}

var xyz:Person={
    age:50,
    name:"jjjj",
    display(){
        console.log(this.name)
    }
};

interface Marks{
    value:number,
    subject:string
}
class Student implements Person{
    age:number;
    name:string;
    className:string;
    display(){
         var marks:Marks[];
         marks.push({
             value:90,
             subject:"English"
         })
    }
}