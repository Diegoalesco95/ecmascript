// Object.entries --- Generar Matrices -------------------
const data = {
  frontend: "Darrick",
  backend: "Manuel",
  design: "Frances"
};

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

// Object.values --- Generar un arreglo ------------------
const data = {
  frontend: "Darrick",
  backend: "Manuel",
  design: "Frances"
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding  --- Transformar Caracteres-------------------------------------------

const string = "Hello";
console.log(string.padStart(7, "Hi"));
console.log(string.padEnd(12, "-----"));

// Trainling Commas ------------------------------------------------

const Obj = {
  name: "oscar" //,
};

// Asyc Await ------------------------------------------------

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello, World!"), 3000)
      : reject(new Error("Error"));
  });
};

// sc8

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
