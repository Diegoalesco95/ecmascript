// Default params

function newFunction(name, age, country) {
  var name = name || "Diego";
  var age = age || 25;
  var country = country || "CO";
  console.log(name, age, country);
}

// es6

function newFunction2(name = "Diego", age = 25, country = "CO") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Alejandro", 26, "MX");

// Concatenación

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
