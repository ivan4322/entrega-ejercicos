//7) Precio final
//a) Realiza un algoritmo para determinar cuánto pagará finalmente una persona
//por un artículo, considerando que tiene un descuento de 20%, y debe pagar
//15% de IVA (debe mostrar el precio con descuento y el precio final).
let articulo = [];
let precio =  [] ;
let elemento = prompt("ingrese la prenda a comprar");
articulo.push(elemento);
let precioUni = parseInt(prompt("ingrese el precio"));
precio.push(precioUni);
 
let descuento = precio[0]*0.20;


let precioDescuento = precio[0]-descuento;


let iva =  precio[0]*0.15;

let ivatotal = precioDescuento+iva;

alert("EL PRECIO TOTAL DEl articulo " +articulo[0] + "  con el DESCUENTO DEL 20% MAS EL IVA ES DE " + ivatotal);

