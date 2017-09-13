System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Car;
    return {
        setters: [],
        execute: function () {
            Car = /** @class */ (function () {
                function Car(model, price, variant) {
                    this.model = model;
                    this.price = price;
                    this.variant = variant;
                }
                Car.prototype.showCar = function () {
                    console.log("Car model - " + this.model + " - Price " + this.price + " Variant " + this.variant);
                };
                return Car;
            }());
            exports_1("Car", Car);
        }
    };
});

//# sourceMappingURL=car.js.map
