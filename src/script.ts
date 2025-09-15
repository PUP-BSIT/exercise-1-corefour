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

// TODO(Durante, Stephanie),
// TODO(Florido, Maydelyn),

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

// TODO(Siervo, Jallaine Perpetua):
//    create an object out of the Type created in item no. 3. The print method should display all the properties of the object in the format of your choice.

// TODO(Durante, Stephanie),
// TODO(Florido, Maydelyn),
car3.print();
// TODO(Siervo, Jallaine Perpetua):
//    call the print method of he/she created in item no. 4.
