var Car = (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.showCar = function () {
        console.log("Model " + this.model + " - Price " + this.price);
    };
    return Car;
}());
//# sourceMappingURL=car.js.map