//11) Nota promedio
//a) Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
//considerando que realiza tres exámenes, de los cuales el primero y el
//segundo tienen una ponderación de 25%, mientras que el tercero de 50%.

let examenes = 3;

let contNotas = 0; 
let otro = 0;
let promedio = 0;
let notas;
let nota1y2=0;
let i;
for ( i= 0; i<examenes; i++){
 notas = parseInt(prompt("digite la nota " +(i+1)));
    if(i==1 || i==2) {
    nota1y2 = notas*0.25;
    
   contNotas = contNotas+1;
  promedio = nota1y2+promedio;

    }else{
        nota3 = notas*0.50;
        promedio = promedio+ nota3;
        contNotas = contNotas+1;
        otro=nota3+otro;
    }
}

total = nota1y2+nota3;


totalpromedio= promedio
alert("el promedio de la nota del estudiante es: " +totalpromedio)
