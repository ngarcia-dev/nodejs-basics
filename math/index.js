export function add(x, y) {
  return x + y;
}

export function subtrac(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x / y;
}

// Objeto export de funcion math
export default {
  add,
  subtrac,
  multiply,
  divide
}

// console.log(add(10, 20));
// console.log(subtrac(10, 20));
// console.log(multiply(10, 20));
// console.log(divide(10, 20));
