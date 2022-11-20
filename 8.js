/* Practice Assignment 8:

Complete this javascript file according to the individual instructions
given in the comments.

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////
// Hint: If you see a console.log() in my examples, it is
// likely a "return" goes there in your assignment.
///////////////////

// 1) Define a "Vehicle" class that has a "wheels" property equal to 4 in
// the constructor and a method named "rolling" that returns a string
// equal to "Rolling down the highway on {wheels value} wheels."
// Use the class to instantiate a new object named myRide.
class Vehicle {
    constructor() {
      this.wheels = 4;
    }
    rolling() {
      return `Rolling down the highway on ${this.wheels} wheels.`;
    }
  }

  let myRide = new Vehicle();
  // 2) Define a "Car" subclass based on the parent class "Vehicle".
  // The "Car" class should also accept a parameter "carDoors". The
  // "Car" class should have a "doors" property that is set to the
  // value of the "carDoors" parameter. Add a method named "doorsAndWheels"
  // that returns a string equal to "My car has {doors value} doors and
  // {wheels value} wheels."
  // Use the "Car" class to instantiate a new object named myCruiser.
  class Car extends Vehicle {
    constructor(carDoors) {
      super();
      this.doors = carDoors;
    }
    doorsAndWheels() {
      return `My car has ${this.doors} doors and ${this.wheels} wheels.`;
    }
  }

  let myCruiser = new Car(4);
  // 3) Define a "Pie" class with the properties "flavor" and "slices".
  // Set the "flavor" property equal to a parameter named "pieFlavor".
  // Set the "slices" property equal to 8. Add a "getSlices" method
  // and a "setSlices" method that function as expected.
  // Use the "Pie" class to instantiate a new object named myDessert
  class Pie {
    constructor(pieFlavor) {
      this.flavor = pieFlavor;
      this.slices = 8;
    }
    getSlices() {
      return this.slices;
    }
    setSlices(value) {
      this.slices = value;
    }
  }

  let myDessert = new Pie("apple");
  // 4) Define a Factory Function named "iceCreamFactory" that
  // accepts a "iceCreamFlavor" parameter.
  // The function will create an object that has a "flavor"
  // property which is private. Set the "flavor" property
  // value to the parameter "iceCreamFlavor" value.
  // The function should also add a public "cone" property
  // that has the value "waffle".
  /////////////////////
  // The factory function should add a method to the object
  //  it creates called "serve" that returns a string:
  // "Here's your { flavor } ice cream in a { cone } cone."
  ///////////////////
  // Hint: Look at this week's image for Factory Functions
  ////////
  // Use iceCreamFactory to instantiate an object named myScoop.
  function iceCreamFactory(iceCreamFlavor) {
    const flavor = iceCreamFlavor;
    return{
      cone: "waffle",
      serve: function() {
        return `Here's your ${flavor} ice cream in a ${this.cone} cone.`;
      }
    }
  }

  let myScoop = new iceCreamFactory("chocolate");
  // 5) Using a literal (not a class or function), define an object
  // named "webDev" that has the following key-value pairs:
  // foundation: "html", design: "css", logic: "javascript",
  // build: function(){return "building..."}
  // Convert the "webDev" object to JSON, and save the converted
  // data in a variable named sendJSON.
  // Now convert the sendJSON data back to an object
  // named receiveJSON.
  let webDev = {
    foundation: "html",
    design: "css",
    logic: "javascript",
    build: function() {
      return "building...";
    }
  };

  const sendJSON = JSON.stringify(webDev);
  const receiveJSON = JSON.parse(sendJSON);