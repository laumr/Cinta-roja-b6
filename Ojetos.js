//Objetos: 
//Literales 
//Clases 

//LITERAL:

let Perroliteral = {
    raza : 'chihuahua',
    edad : 5,
    color : 'cafe',
    tamano : 'pequeño',
    atacar : function ataque(){console.log('el perro está atacando')},
}
// console.log(Perroliteral);
// console.log ('RAZA =', Perroliteral['raza']);
// console.log ('COLOR =', Perroliteral.color);
// Perroliteral.atacar();

// CLASES:

class Perro {
    //constructor
    constructor(raza, edad, color, nombre){
        this.edad = edad,
        this.raza = raza,
        this.color = color,
        this.nombre = nombre
    }

    atacar(persona){ 
        console.log(`Me llamo ${this.nombre} y estoy atacando a ${ persona}`);
    }
    comer(comida){
        console.log('comiendo', comida);
    }
}

let ayudanteDeSanta = new Perro('chihuahua', 10, 'café','ayudante');
let firulais = new Perro('poodle', 2, 'blanco', 'firulais');

ayudanteDeSanta.atacar('Charly');
firulais.atacar('Charly');
console.log(firulais.color);

//EJEMPLO HERENCIA

class Animal {
    //constructor
    constructor(raza, edad, color, nombre){
        this.edad = edad,
        this.raza = raza,
        this.color = color,
        this.nombre = nombre
    }

   
    comer(comida){
        console.log(`Soy un ${this.raza} y estoy comiendo ${comida}`);
    }
}

class Gato extends Animal{
    constructor(raza,edad,color,nombre,duenio){
        super(raza, edad, color, nombre),
        this.duenio = duenio

    }

    atacar(persona){ 
        console.log(`Me llamo ${this.nombre} y estoy atacando a ${ persona}`);
    }

}

let miAvestruz = new Animal ('Avestruz', 5, 'negro','pepe');
let miGato = new Gato ('Siames',4, 'café','misifus','Laura');

miAvestruz.comer('gusanos');
miGato.comer('ratones');
