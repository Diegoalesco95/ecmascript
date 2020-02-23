/* Operador de reposo para extraer propiedades de un objeto 
que aun no se ha construido */

const obj = {
  name: "Jamil",
  age: 32,
  country: "CO"
};

let { name, ...all } = obj;
console.log(name, all); //  Jamil { age: 32, country: 'CO' }

let { country, ...all } = obj;
console.log(all); //  { name: 'Jamil', age: 32 }

// Propagation Properties

const obj = {
  name: "Camille",
  age: 32
};

const obj1 = {
  ...obj,
  country: "MX"
};

console.log(obj1);

// Promise.finally

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello, world"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Finalizó"));

// RegexData

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
