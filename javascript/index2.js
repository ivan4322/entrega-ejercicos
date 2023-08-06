//2) Conversión USD
//a) Una empresa importadora desea determinar cuántos dólares puede adquirir
//con determinada cantidad de pesos. Realiza el algoritmo para tal fin.

let pesos = parseInt(prompt("digite el precio actual del peso colombiano"));
let cantidad = parseInt(prompt("digite la cantidad de pesos colombiano que desee convertir a dolares"));
let dolar = 1;


total = cantidad/pesos;

alert("la cantidad de dolares a obtener de " + cantidad + " es " +total);