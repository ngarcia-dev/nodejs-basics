let userName = "Nahuel";

let age = 20;

let hasHobbies = false;

let points = {
  name: "Nahuel",
  lastname: "Garcia",
};

const PI = 3.1416;

console.log(points, PI, age, userName, hasHobbies);

/*para comentar las linead seleccionadas usar la convinacion ctrl + k + c y para descomentar las lineas seleccionadas ctrl + k + u*/

const showUserInfo = (userName, userAge) =>
  `El usuario es ${userName}, y tiene ${userAge} años de edad`;

console.log(showUserInfo("john", 22));
console.log(showUserInfo("nahuel", 20));
