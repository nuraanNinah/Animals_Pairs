class Animal {
  constructor(name, sound) {
      this.name = name;
      this.sound = sound;
  }
  sounds() {
      return `${this.sound}`;
  }
  eat() {
      return `${this.name} eats`;
  }
}

class Dog extends Animal {
  sounds() {
      return `Dog ${this.sound}`;
  }
}
class Cat extends Animal {
  sounds() {
      return `Cat ${this.sound}`;
  }
}

class Home {
  constructor() {
      this.array = []
      this.sound = []
  }
  
  adoptPet(animal) {
      if(this.array.indexOf(animal)!==-1){
        console.error("not ok at all")
      }else{
        this.array.push(animal)
        console.log("Totally okay")
      }

  }
  makeAllSounds() {

      for (let i = 0; i < this.array.length; i++) {
          this.sound.push(this.array[i].sounds())
      }
      return this.sound.join("\n")
  }
}

var dog = new Dog("Rax", "Barks");
var cat = new Cat("Stormy", "meows");
console.log(dog.eat());
console.log(dog.sounds());
console.log(" ");
console.log(cat.eat());
console.log(cat.sounds());

let home = new Home()
var dog1 = new Dog("Dog", "barks");
var dog2 = new Dog("Dog", "barks");
var cat = new Cat("Cat","meows");
home.adoptPet(dog1)
home.adoptPet(dog1)
home.adoptPet(dog2)
home.adoptPet(cat)


console.log(home.makeAllSounds())

module.exports = {Animal}
