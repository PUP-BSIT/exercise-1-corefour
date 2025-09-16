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
    }
};
const car2 = {
    id: 2,
    brand: "Ford",
    model: "Ranger",
    year: 2021,
    type: CarType.TRUCK,
    print: function () {
        console.log(`ID: ${this.id},
       Brand: ${this.brand},
       Model: ${this.model},
       Year: ${this.year},
       Type: ${this.type}`);
    }
};
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
const car4 = {
    id: 4,
    brand: "Hyundai",
    model: "Tucson",
    year: 2020,
    type: CarType.SUV,
    print: function () {
        console.log(`ID: ${this.id},
      Brand: ${this.brand},
      Model: ${this.model},
      Year: ${this.year},
      Type: ${this.type}`);
    }
};
car1.print();
car2.print();
car3.print();
car4.print();
export {};
