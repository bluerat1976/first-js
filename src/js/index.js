var age = 18;
console.log("my age: ", age);
console.log("age has type: ", typeof age);

var name = "vitali";
console.log("my name: ", name);
console.log("name has type: ", typeof name);

var married = true;
console.log("I am married: ", married);
console.log("married has type: ", typeof married);

var x;
console.log("x value: ", x);
console.log("x has type: ", typeof x);

var y = null;
console.log("y value: ", y);
console.log("y has type: ", typeof y);

var person = {
  name: "vitali",
  age: "31",
  married: true
};
console.log("person value: ", person);
console.log("person has type: ", typeof person);

var myArray = [1, "fdsfds", true];
console.log("myArray value: ", myArray);
console.log("myArray has type: ", typeof myArray);

var myVar = function() {};

var myAge = 1;

if (myAge <= 2) {
  console.log("baby");
} else if (myAge >= 6) {
  console.log("adult");
} else {
  console.log("kid");
}

var married = false;

var stringMarried = married ? "I am married" : "I am single";

console.log("stringMarried: ", stringMarried);