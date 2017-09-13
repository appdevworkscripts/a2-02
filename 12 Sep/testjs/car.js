var Car2 = (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.showCar = function () {
        console.log("Model " + this.model + " - Price " + this.price);
    };
    return Car;
}());


//c1=new Car();