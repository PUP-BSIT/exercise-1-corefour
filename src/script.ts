enum CarType {
  SEDAN = "Sedan",
  SUV = "SUV",
  TRUCK = "Truck",
  COUPE = "Coupe",
  HATCHBACK = "Hatchback",
}

type Car = {
  id: number;
  brand: string;
  model: string;
  year: number;
  type: CarType;
  print(): void;
};

const car1: Car = {
  id: 1,
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  type: CarType.SEDAN,
  print: function () {
    console.log(
      `ID: ${this.id},
      Brand: ${this.brand},
      Model: ${this.model},
      Year: ${this.year},
      Type: ${this.type}`
    );
  }
};

const car2: Car = {
  id: 2,
  brand: "Ford",
  model: "Ranger",
  year: 2021,
  type: CarType.TRUCK,
  print: function () {
    console.log(
      `ID: ${this.id},
       Brand: ${this.brand},
       Model: ${this.model},
       Year: ${this.year},
       Type: ${this.type}`
    );
  }
};

const car3: Car = {
  id: 3,
  brand: "Honda",
  model: "Civic",
  year: 2023,
  type: CarType.COUPE,
  print: function () {
    console.log(
      `ID: ${this.id},
       Brand: ${this.brand},
       Model: ${this.model},
       Year: ${this.year},
       Type: ${this.type}`
    );
  }
};

const car4: Car = {
  id: 4,
  brand: "Hyundai",
  model: "Tucson",
  year: 2020,
  type: CarType.SUV,
  print: function () {
    console.log(
      `ID: ${this.id},
      Brand: ${this.brand},
      Model: ${this.model},
      Year: ${this.year},
      Type: ${this.type}`
    );
  }
};

car1.print();
car2.print();
car3.print();
car4.print();