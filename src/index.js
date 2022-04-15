console.clear();

// **************************************************
// de los primeros 50 numeros, sumar solo los pares
// **************************************************

let resultado = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    resultado += i;
  }
}

console.log(resultado);

// **************************************************
// ingresar un numero y verificar si es primo o no
// **************************************************

// cambiar numero de entrada en let num =
let num = 6;
var resp = "";

if (num === 2) {
  resp = "es primo";
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      resp = "no es primo";
      break;
    }
    resp = "es primo";
  }
}

console.log(resp);
