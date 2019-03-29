// let raza = {
//     nombre:  "Bob",
//     variedades: 5,

//     mostrar: function (){
//         alert('Soy ' +this.nombre );
//     }
// };

// console.log(mostrar);

function mostrar(nombre, variedad) {
    let Raza = {
        nombre:  nombre,
        variedad: variedad,
    }

    return Raza;
}


console.log(mostrar("tobby", "pastor alemán"))