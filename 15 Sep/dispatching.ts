
class Speed {
    distance: number;
    time: number;
    constructor(distance: number, time: number) {
        this.distance = distance;
        this.time = time;
    }
    calc() {
        return this.distance / this.time;
    }
}
class Velocity extends Speed {
    direction: number;
    constructor(distance: number, time: number, direction: number) {
        super(distance, time);
        this.direction = direction;
    }
    calc() {
        return Math.cos(this.direction) * super.calc();
    }
    getSpeedWithoutDirection() {
        return super.calc();
    }
}



var speed1: Speed = new Speed(100, 5);
console.log(speed1.calc());



var velocity1: Velocity = new Velocity(100, 5, Math.PI / 6);
console.log(velocity1.calc());

var speed2: Speed = new Velocity(100, 5, Math.PI / 6);

//var velocity2:Velocity=speed1;
console.log(speed2.calc())
//console.log(speed2.getSpeedWithoutDirection())


var sum = function (a: number, b: string): string {
    return a + b;
}


sum(5, '5');