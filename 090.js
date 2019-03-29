// -> Define dos constructores: 'Robot' y 'Vehicle'
// -> Cuando `Robot` se invoque con 'new' debe retornar el 'this' implícito
// -> Cuando `Vehicle` se invoque con 'new', debe retornar un objeto cualquiera,
//    no el 'this' implícito.

function Robot(){
  this.__proto__ = Robot.prototype;
    
  this.bor = 'Borja';
  //retorna bor
  return this;
}

//nuevo objeto de tipo robot
let rotot = new Robot();
Robot.bor;

function Vehicle(){
  return {};
}

let vehicle = new Vehicle();


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  Robot:   Robot,
  Vehicle: Vehicle
}
