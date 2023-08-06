//monto del cheque.

let diasViaje = parseInt(prompt("ingrese los dias de viaje"));


let hotel = 20000;
let comida = 30000;
let otro = 200;
let todo = hotel+comida+otro;
let contMonto = 0
for (let i = 0; i<diasViaje; i++){

contMonto=contMonto+todo

}

alert("el precio total de todo los biaticos es "  +contMonto)