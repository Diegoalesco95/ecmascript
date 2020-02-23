//flat -- Devolver una matriz con cualquier sub-matriz aplanada

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2)); // flat recibe como parametro la profundidad

// flatMap --- mapea cada elemento, despues pasar una funcion y luego aplanar segun el resultado

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));

/*
[
 1, 2, 2, 4,  3,
 6, 4, 8, 5, 10
] 
*/

// trimStart y trimEnd

let hello = "           Hello, World!";

console.log(hello);
console.log(hello.trimStart());

let hello = "Hello World               ";

console.log(hello);
console.log(hello.trimEnd());

// TRY AND CACTH WITHOUT error---------------

// es7
try {
} catch (error) {
  console.log(error);
}

// es10
try {
} catch {
  console.log(error);
}

// ENTRIES TO OBJECTS----------------------------------
let entries = [
  ["nombre", "Clark"],
  ["edad", 22]
];

obj = Object.fromEntries(entries);
console.log(entries);
console.log(obj);

// DESCRIPTION IN SIMBOL-------------------------------

let s = Symbol("Esta es la descripcion del simbolo");
console.log(s.description);
