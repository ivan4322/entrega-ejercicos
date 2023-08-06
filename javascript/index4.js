//4) Estacionamiento
//a) Un estacionamiento requiere determinar el cobro que debe aplicar a las
//personas que lo utilizan. Considera que el cobro es con base en las horas
//que lo disponen y que las fracciones de hora se toman como completas,
//realiza el algoritmo que permita determinar el cobro.


let horas = parseInt(prompt("digite la cantidad de horas del vehiculo en el parqueadero"));

let precioHora = 2000;





if (horas >0){
    let cobro = precioHora*horas;
    alert("el cobro total por las " +horas+ " horas es de " +cobro)
}else{
    alert("no hay horas registradas");
}
