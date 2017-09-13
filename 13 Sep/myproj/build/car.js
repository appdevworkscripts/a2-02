System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Car;
    return {
        setters: [],
        execute: function () {
            Car = (function () {
                function Car(model, price) {
                    this.model = model;
                    this.price = price;
                }
                Car.prototype.showCar = function () {
                    console.log("Car model - " + this.model + " - Price " + this.price);
                };
                return Car;
            }());
            exports_1("Car", Car);
        }
    };
});
//# sourceMappingURL=car.js.map