let cal = require('./module1');
let area = require('./module2').Area;
let cylinder = require('./module2').Cylinder;

let obj1 = new cal();
let obj2 = new area();
let obj3 = new cylinder(3,7);

let s = obj1.add(5,7);
let rect = obj2.rectArea(7,4);
let circle = obj2.circleArea(5);

console.log(`Sum = ${s}`);
console.log(`Area of rectangle = ${rect}`);
console.log(`Area of circle = ${circle}`);
console.log(`Volume of cylinder = ${obj3.volume()}`);
console.log(`Total surface area of cylinder = ${obj3.totalSurfaceArea()}`);