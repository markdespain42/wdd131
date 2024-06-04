const steps = ["one", "two", "three"];

steps.map((step) => {
    document.querySelector("#myList").innerHTML += `<li>${step}</li>`
}) 
// for (let i=0; i<steps.length; i++) {
//     document.querySelector("#myList").innerHTML += `<li>${steps[i]}</li>`
// }
// steps.forEach((step) => {
//     document.querySelector("#myList").innerHTML += `<li>${step}</li>`
// })

const listTemplate = (step) => {
    return `<li>${step}</li>`
}

const grades = ["A", "B", "A"];
function convertGrade(grades) {
    let points = 0;
    if (grades === "A") {
        points = 4;
    } else if (grades === "B") {
        points = 3;
    } else if (grades === "C") {
        points = 2;
    } else if (grades === "D") {
        points = 1;
    } else if (grades === "F") {
        points = 0;
    }
    return points
}
const gpapoints = grades.map(convertGrade(grades));
console.log(gpapoints);

const pointsTotal = gpapoints.reduce((total, points) => {
    return total + points;
})
const gpa = pointsTotal / gpapoints.length;
console.log(gpa);

const fruit = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = fruit.filter(fruit => fruit.length < 6);
console.log(shortWords);

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtmls.join("");