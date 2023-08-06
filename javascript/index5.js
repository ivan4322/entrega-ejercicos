//5) Pinturería
//a) Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
//pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
//generando presupuestos para cada cliente.

let cliente = 5
let precio = 5000
let metro =1;

for (let i=0; i<cliente; i++){
    let metroC = parseInt(prompt("cuantos m2 pinto el pintor " +(i+1)));
   
let total = metroC*precio;
alert ("el total ganado del pintor " +(i+1)+ " es " +total);


}


