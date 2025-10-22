// we learn here about inheritance, here the the child classes inherit property and methods from parent class

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age);
    this.color = color;
  }
  meow() {
    console.log(`${this.name} is meowing`);
  }
}

class Bird extends Animal {
  constructor(name, species, age) {
    super(name, age);
    this.species = species;
  }
  fly() {
    console.log(`${this.name} is flying`);
  }
}

const dog1 = new Dog("tomy", "german", 3);
dog1.eat();
console.log(dog1);

//same classes without constructor
// class Animal {
//   name;
//   age;

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// class Dog extends Animal {
//   breed;
//   bark() {
//     console.log(`${this.name} is barking`);
//   }
// }

// class Cat extends Animal {
//   color;
//   meow() {
//     console.log(`${this.name} is meowing`);
//   }
// }

// class Bird extends Animal {
//   species;
//   fly() {
//     console.log(`${this.name} is flying`);
//   }
// }

// const dog1 = new Dog();
// dog1.name = "curl";
// dog1.age = 4;
// dog1.breed = "Persian";
// dog1.eat();
// console.log(dog1);
