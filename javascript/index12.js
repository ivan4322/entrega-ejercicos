//12) Monto en cuotas
//a) Dado un número real que representa el valor total de una compra, informar
//las posibles formas de pago según la siguiente tabla. Específica los datos de
//entrada, de salida, estrategia.
//1 cuota de $................. (0% de recargo)
//2 cuotas de $................. total $................. ( 5% de recargo)
//6 cuotas de $................. total $................. ( 40% de recargo)

let totalCompra = parseInt(prompt("digite la totalidad de ola compra"));

let cuotas = 3;
let totalCuota = parseInt(prompt("digite a cuantas cuotas deseas pagar"));

if (totalCuota >=1 || totalCuota<=3){
    if (totalCuota==1){
        alert("el pago de una cuota de  " +totalCompra + "se da un recargo de 0%");
    }else if (totalCuota==2){
       
        let cuota2 = totalCompra*0.5;
        alert("el pago de dos cuotas de " +totalCompra + "se da un recargo de 5%, que equivale a " +cuota2);
    }else if(totalCuota==3){
        let cuota3 = totalCompra*0.40;
        
        alert("el pago de 3 cuotas de " +totalCompra + "se da un recargo de 40% que equivale a " +cuota3);
    }



}else{
    
    alert ("digite un numero valido");
}
   