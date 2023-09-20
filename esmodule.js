// EcmaScript es una serie de reglas que tiene JavaScript sirve para que todo los interpretes, se basen en las mismas reglas del lenguaje es decir que ningun entorno tengas sus propias reglas sino que se basan en un estandar.
import math, { divide, multiply } from "./math/index.js"; // = const math = require('./math/index.js')

console.log(math.divide(100, 10));
console.log(math.multiply(100, 10));
console.log(divide(100, 10));
console.log(multiply(100, 10));
