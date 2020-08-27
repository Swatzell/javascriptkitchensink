let name = "David";
const stateAmt = 50;
//add function usage
let numSum = add(5, 4);
var veggies = ["corn", "spinach", "squash", "okra"];
console.log(sayHello());
console.log(numSum);
function add(num1, num2) {
    return num1 + num2
};
function sayHello() {
    alert("Hello World!!");
}
for (let i of veggies) {
    console.log(i);
}
function checkAge(name, age) {
    if (age >= 21) {
        console.log("Welcome to the page!" + " " + name)
    } else {
        console.log("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge('charles', 21);
checkAge("abby", 27);
checkAge("james", 18);
checkAge("john", 17);

let pet = {
    name: "Major",
    breed: "Pug"
};
console.log(pet.name)
console.log(pet.breed)