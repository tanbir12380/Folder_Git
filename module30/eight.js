// we learn about this keyword and encapsulation in js and encapsulations

// In a normal object method, this refers to the object itself.
const person = {
  name: "Tanbir",
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};
person.greet(); // Output: Hi, I’m Tanbir

// Arrow functions don’t have their own this — they inherit this from their surrounding scope.
const user = {
  name: "Tanbir",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  },
};
user.greet(); // Output: Hello, undefined

// class + this in normal functions
class Animal {
  constructor(name) {
    this.name = name; // 'this' refers to the current instance
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }
}

const pet1 = new Animal("Dog");
pet1.speak(); // output:Dog is speaking

// class + this within arrow function
class Animal1 {
  constructor(name) {
    this.name = name;
  }

  speak = () => {
    console.log(`${this.name} is speaking`);
  };
}

const pet2 = new Animal1("Cat");
pet2.speak(); // output:Cat is speaking

//encapsulation

class myBank {
  name = "";
  age = 0;
  account_number = "";
  balance = 0;
}
