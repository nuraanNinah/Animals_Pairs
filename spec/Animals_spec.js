let myTest = require("../src/Animals");

let dog = new myTest.Animal("Rax", "Barks")
let cat = new myTest.Animal("Stormy", "meows")

describe("constructor for the class 'Animal'", () => {

  it("Should return name", () => {
    expect(dog.name).toEqual('Rax');
  });


  it("Should return sound", () => {
    expect(dog.sound).toEqual('Barks');
  });


  it("Should return name", () => {
    expect(cat.name).toEqual("Stormy");
  });


  it("Should return sound", () => {
    expect(cat.sound).toEqual("meows");
  });

});

