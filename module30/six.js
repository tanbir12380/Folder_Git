/*
 * class --> template
 * properties
 * method (a special type of function inside a class without the function keyword)
 */

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
  }
  goal() {
    console.log("score a goal");
  }
  getTeamName() {
    return this.name;
  }
}

const player1 = new Player("Tom Brady", 33);
const player2 = new Player("Shanto", 11);
const player3 = new Player();

console.log(player2);
console.log(player2.getTeamName());
player1.goal();
//instanceof check either the object is derived from or belongs to the class or not
console.log(player1 instanceof Player);
console.log(player3);

//without constructor
// if a property has no predefined value, it will show undefined
class student {
  name = "unknown";
  age = 0;
  country = "Bangladesh";
  salary;

  getDetails() {
    console.log(
      "name :",
      this.name,
      "age :",
      this.age,
      "country :",
      this.country,
      "salary :",
      this.salary
    );
  }
}

let rakib = new student();
console.log(rakib);
rakib.getDetails();
rakib.name = "rakib";
rakib.age = 56;
rakib.country = "China";
rakib.salary = 647300;
console.log(rakib);
