let myName = "King";

function greetMe() {
    let myGreeting = "Hello ";
    return myGreeting + myName;
}

console.log(greetMe());

let diameter = 10;
if (diameter > 0) {
    let pi = 3.14;
    let circumference = pi * diameter;
    console.log("The circumference is: " + circumference);
}

function myFunction1() {
    console.log(myFunction1("test1"));

    function myFunction2() {
    console.log(myFunction2("test2"));
    }
}
//nothing seems to happen


const calculateCircumference = (n) => {
    let diameter1 = 10;
    let pi = 3.14;
    return diameter1 => pi * n
}

console.log(calculateCircumference(5));