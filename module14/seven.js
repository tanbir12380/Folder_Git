/* nested if else */

var money = 1000;

if (money >= 500) {
  console.log("You have enough money.");

  if (money >= 1000) {
    console.log("You can buy a pizza and a cold drink.");
  } else {
    console.log("You can buy a burger only.");
  }

} else {
  if (money >= 100) {
    console.log("You can buy chips.");
  } else {
    console.log("Not enough money to buy anything.");
  }
}
