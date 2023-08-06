//8) Ahorros
//a) Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
//un año si considera que cada semana ahorra 15% de su sueldo (considera
//cuatro semanas por mes y que no cambia el sueldo).


let sueldo = parseInt(prompt("digite el sueldo que gana en la semana"));


let ahorro = sueldo*0.15;


let ahorroano = ahorro*12;


alert("su ahorro anual es de"  +ahorroano);