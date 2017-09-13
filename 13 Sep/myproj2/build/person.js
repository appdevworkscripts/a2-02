System.register(["./car"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var car_1, Person;
    return {
        setters: [
            function (car_1_1) {
                car_1 = car_1_1;
            }
        ],
        execute: function () {
            Person = /** @class */ (function () {
                function Person(name, age) {
                    this.name = name;
                    this.age = age;
                }
                Person.prototype.showPerson = function () {
                    console.log("Person - " + this.name + " age - " + this.age);
                };
                Person.prototype.driveCar = function () {
                    var c1 = new car_1.Car("Maruti", 900000, "Alto");
                    console.log("Driving");
                    c1.showCar();
                };
                return Person;
            }());
            exports_1("Person", Person);
        }
    };
});

//# sourceMappingURL=person.js.map
