

// Un arreglo (matriz) es una colección ordenada de datos (tanto primitivos u objetos dependiendo del lenguaje). Los arreglos (matrices) se emplean para almacenar multiples valores en una sola variable, frente a las variables que sólo pueden almacenar un valor (por cada variable).



//Forma de crear arreglos 
var colores =["Rojo" , "Verde" , "Azul"];
console.log(colores[0]);
//arreglos numeros 2
var frutas = new Array();
frutas[0] = "Sandia";
console.log(frutas[0]);
//Indicamos la pocison de los arreglos y los almacenamos en variables de 1 al 5 en esta posiciones 


var numero = new Array(5); 
numero[0] = 7;
numero[1] = 4;
numero[2] = 6;
numero[3] = 8;
numero[4] = 3;
console.log(numero[4]);


let tamanio=numero.length;
for(let indice =1; indice < tamanio; indice++){
    console.log(numero[indice]);
    }

    var animal = new Array(5); 
animal[1] = "gatos";
animal[2] = "perro";
animal[3] = "conejo";
animal[4] = "hansters";
animal[5] = "loro";
console.log(animal[3]);
//mostrar la cantidad de arreglos que hay en animal
console.log(animal.length);
//otra forma es 
let tamanio2=numero.length;
 for(let indice =1; indice < tamanio2; indice++){
 console.log(animal[indice]);
}

//Valor con indices y el elemento
for(let num in animal){
console.log(num + " = " + numero[num]);

}











