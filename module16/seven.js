/* objects are non primitive while normal variable starts with let,var, const are primitive */

let bus = {
name : 'ENA',
total_seat: 45,
cost : 800,
isAC : false,
'max speed':140
};


//dot notation
console.log(bus);
console.log(bus.name);

let bus_seat = bus.total_seat;
console.log(bus_seat);



//bracket notation
bus_cost = bus['cost'];
console.log(bus_cost);


let speed = bus['max speed']; //will not work with dot notation
console.log(speed);

bus.total_seat = 50; //modifying object key's value 
bus['max speed'] = 165;


let topSpeed = 'max speed';
console.log(bus[topSpeed]); 