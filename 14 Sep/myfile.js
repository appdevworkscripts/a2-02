var t = [4, 7, 2, 9, 10, "hello"];
t.forEach(function (x) { return console.log(x); });
var arr = [5, 2, 9, 10];
arr.forEach(function (x) {
    console.log(x);
});
var Car = (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.displayCar = function () {
        console.log(this.model + "-" + this.price);
    };
    return Car;
}());
var c1 = new Car("BMW", 90909);
var cars = [c1, new Car("Maruti", 6000), new Car("Ford", 7000), new Car("Audi", 8000)];
cars.forEach(function (x) { return x.displayCar(); });
var filteredCars = cars.filter(function (x) { return x.price > 7000; });
console.log("-----------------------------------");
filteredCars.forEach(function (x) { return x.displayCar(); });
