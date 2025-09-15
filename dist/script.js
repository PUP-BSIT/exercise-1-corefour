"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarType;
(function (CarType) {
    CarType["SEDAN"] = "Sedan";
    CarType["SUV"] = "SUV";
    CarType["TRUCK"] = "Truck";
    CarType["COUPE"] = "Coupe";
    CarType["HATCHBACK"] = "Hatchback";
})(CarType || (CarType = {}));
const car1 = {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    type: CarType.SEDAN,
    print: function () {
        console.log(`ID: ${this.id}, 
      Brand: ${this.brand}, 
      Model: ${this.model}, 
      Year: ${this.year}, 
      Type: ${this.type}`);
    },
};
// TODO(Florido, Maydelyn),
const car3 = {
    id: 3,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    type: CarType.COUPE,
    print: function () {
        console.log(`ID: ${this.id},
       Brand: ${this.brand},
       Model: ${this.model},
       Year: ${this.year},
       Type: ${this.type}`);
    }
};
// TODO(Siervo, Jallaine Perpetua):
//    create an object out of the Type created in item no. 3. The print method should display all the properties of the object in the format of your choice.
car1.print();
// TODO(Florido, Maydelyn),
car3.print();
// TODO(Siervo, Jallaine Perpetua):
//    call the print method of he/she created in item no. 4.
