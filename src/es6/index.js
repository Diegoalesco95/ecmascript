// Default params----------------------------

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

// Concatenación -----------------------------

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea----------------------------

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \n" +
  "otra frase epica.";

// es6

let lorem2 = `otra frase epica en una nueva linea,
 y esta es la continuacion de la frase epica
`;

console.log(lorem);
console.log(lorem2);

// Desestructuracion-------------------------------

let person = {
  name: "Diego",
  age: 25,
  country: "CO"
};

console.log(person.name, person.age);

// es6

let { name, age, country } = person;
console.log(name, age, country);

// Operador de propagacion (Spread operator) ---------

let team1 = ["Donavon", "Audrey", "Javonte"];
let team2 = ["Anjali", "Amie", "Bailee"];

let education1 = [
  "Zula",
  "Donavon",
  "Audrey",
  "Javonte",
  "Anjali",
  "Amie",
  "Bailee"
];
console.log(education1);

// es6

let education2 = ["Zula", ...team1, ...team2];
console.log(education2);

// let y const

{
  var globalVar = "Global Var";
}
console.log(globalVar);

// es6

{
  let globalLet = "Global Let"; // se mantiene dentro del Block Scope
  console.log(globalLet);
}

const a = "b"; // con const no se puede a reasignar
a = "a";
console.log(a);
