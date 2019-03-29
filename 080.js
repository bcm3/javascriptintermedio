// -> Define un constructor 'Robot'
// -> Dentro de la función `Robot` asigna una propiedad 'motors' en 'this',
//    y dale el valor `2` a `motors`
// -> Creaan una instancia de `Robot` llamada `robby`

function Robot(){
  this.motors=2;
}

//objeto de tipo robot
var robby = new Robot()

// -> Cuál es el resultado de `(robby instanceof Robot)`?
//instanceof -> compurueba si el objeto es de un tipo determinado es decir si es 
// del mismo padre
claim((robby instanceof Robot), true);

// -> Qué es `robby.motors`?
claim(robby.motors, 2);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  Robot: Robot,
  robby: robby
}
