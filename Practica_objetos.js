/* 1. Hacer una clase persona que reciba 5 atributos
estatura, peso, nombre, edad, apellido
-IMC
-Nombre
-si es o no mayoe de edad
-cumplir años

2. Crear una clase vehículo que tenga los atributos
marca color año  número de llantas número de pasajeros
*Un método que reciba n cantidad de pasajeros y te diga si puede o no subirlos a todos. 

3. Un objeto animal 
*si tiene plumas o pelo
*si vuela
*nombre de su onomayopeya

*/

class Persona{
    constructor(nombre, apellido, edad, peso, estatura){
    this.nombre = nombre, 
    this.apellido = apellido, 
    this.edad = edad, 
    this.peso = peso,
    this.estatura = estatura 
    }

    calcularIMC(){
        console.log(`Mi IMC es ${this.peso/(this.estatura * this.estatura)}`);  
    }

    imprimirNombreC(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    }

    serMayor(){
        if(this.edad>= 18){
            console.log('Soy mayor de edad');
        }else{
            console.log('Soy menor de edad');
        }
    }
    //Otra forma de escribirlo: 
    //return this.edad >=21 ? 'SI' : 'NO'
    
    
    cumplirAnios(){
        this.edad += this.edad;
        console.log(`Cumplí años! Ahora tengo ${this.edad}`);
    }

}

let laura = new Persona ('Laura', 'Morales', 27, 75, 167);

// laura.cumplirAnios();
// laura.imprimirNombreC();
// laura.serMayor();
// laura.calcularIMC();


class Vehiculo{
    constructor(marca, color, numLlantas, anio, numPasajeros){
    this.marca = marca, 
    this.color = color, 
    this.numLlantas = numLlantas, 
    this.anio = anio,
    this.numPasajeros = numPasajeros 
    }

    subirPasajeros(pasajeros){
        if(pasajeros<=this.numPasajeros){
            console.log('Súbanse');
        }else{
            console.log('No caben :(');
        }
    }

}

let Fit = new Vehiculo ('honda', 'gris', 4, 2010, 5);

//Fit.subirPasajeros(6);

class Animal{
    constructor(nombre, onomatopeya, pelaje, plumaje, vuela){
    this.nombre = nombre,
    this.onomatopeya = onomatopeya,
    this.pelaje = pelaje,
    this.plumaje = plumaje, 
    this.vuela = vuela
    }

    poderVolar(){
        if(this.vuela===true){
            console.log('Puedo volar!');
        }else{
            console.log('No me despegaré del suelo NUNCA');
        }
    }

    piel(){
        

    }
    miOnomatopeya()


}

