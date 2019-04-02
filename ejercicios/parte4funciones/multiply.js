// function multiply(texto,x){

//     for(let i=0; i=x; i++){
//         console.log(texto);
//     }

// }


// console.log(multiply("hola", 5));

//con String.prototype le pasamos un String al invocar a la función directamente
//recorremos con un for, pasandole el numero de veces por argumento. con this mostramos el texto
String.prototype.multiply = function(times) {
    for(let i = 0; i < times; i++){
      console.log(this)
  }
  
}

"hola".multiply(5);