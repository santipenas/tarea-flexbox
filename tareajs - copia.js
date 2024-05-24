//TAREA. crear el codigo que dada una distancia determine el medio de tranporte de  acuerdo a las siguientes reglas



let distance = // se puede definir la distancia y JS ira recomendnado el medio de transporte en la consola según el valor asignado a mi varaiable

if (distance < 1000) {
    console.log('pie')
} else if (distance > 1000 && distance < 10000) {
    console.log('bicicleta')
} else if (distance > 10000 && distance < 30000) {
    console.log('colectivo')
} else if (distance > 30000 && distance < 100000) {
    console.log('auto')
} else if (distance > 100000) {
    console.log('avion')
}; // tambien se podría haber terminado la ultima condicion con un else y sin especificar parametro, ya que cual quier otro valor superior a las condiciones anteriores, JS lo incluiria como una else condition con valores no incluidos anteriormente





// crear el codigo que reciba como paramentro un array de numeros y devuelva el mayor

let i = [3, 7, 9, 12, 34, 76, 156, 16]

for (let i = 0; i < 157; i++) {
    console.log(i + "");
}