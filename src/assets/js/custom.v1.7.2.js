// JavaScript

// let miString = "aeiou";
// console.log("Contador de vocales", miString.length);

// [..."aeiou"].forEach(vocales => {
// console.log(vocales)});

let palabra = prompt("Introduzca una palabra");
let contador = 0;
 
[...palabra.toLowerCase()].forEach(letra => ("aeiou".includes(letra) ? contador++ : null));
 
console.log("La palabra introducida" , palabra , "contiene" , contador , "vocales.");