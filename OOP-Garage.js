class Vehicle {
constructor(make,model,year) {
  this.make = make;
  this.model = model;
  this.year = year;
  }
  honk() {
  return "BEEP";
  }
  toString() {
  return `This ${this.make} is a ${this.model} and it was build in ${this.year}`;
  }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
//------------------------------------------------------------------//

class Car extends Vehicle {
  constructor(make,model,year) {
  super(make,model,year) 
  this.numWheels = 4;
  }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
let myCurrentCar = new Car("Mercedes","SUV",2014);
//----------------------------------------------------------------//
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year)
    this.numWheels = 2;
  }
  revEngine() {
    return `VRRROOOOOOM`;
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

//-----------------------------------------------------------------//

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity
  }
  add(newVehicle) {
    if ( !(newVehicle instanceof Vehicle)) {          // if you try to return sth which is NOT a Vehicle 
      return "Only Vehicles are allowed to park here."
    }
    if ( this.vehicles.length >= this.capacity) {
      return `Sorry, we are full.`
    }
    this.vehicles.push(newVehicle) 
    return `Vehicle added.`
  }
}

let garage = new Garage(2)