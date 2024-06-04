const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;

console.log("Area 1 = " + area)

radius = 4;
area = radius * radius * PI;

console.log("Area 2 = " + area)

function calculateCircleArea(radius) {
    area = radius * radius * PI;
    return area
  }
area = calculateCircleArea(3);
console.log(area)

area = calculateCircleArea(4);
console.log(area)
