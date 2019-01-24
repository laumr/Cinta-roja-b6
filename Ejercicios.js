
//Ejercicio 1 Hacer una función que convierta grads C a F 
let CaFarenheit = (centigrado) => {
  console.log((centigrado * 9/5 )+ 32 + ' ºF');  
}

CaFarenheit(100);


//Ejercicio 2 Hacer una función que muestre la tabla de multiplicar de 

let MultiplicaTabla = tabla => {
    for(let x=1; x<=10; x++){
    console.log (`${x} x ${tabla} = ${x*tabla}`);
    }
}

MultiplicaTabla(1);

//Ejercicio 3 



//Ejercicio 4 Leer un arreglo de enteros 

let arrEnteros = [1,2,3,4,5,6,7,8,9,10];
let promedio = 0;
for(let i=0; i < arrEnteros.length;i++){
    promedio += arrEnteros[i];
}
promedio = promedio/arrEnteros.length;
console.log(promedio);
    
//mediana

let mediana = (arrEnteros[0]+ arrEnteros[arrEnteros-1])/2;
console.log('mediana', mediana);


//Ejercicio 5 
let arrPares = [];

for(let n=0; arrPares.length<20; n++){
    if(n % 2 ===0){
        //es par 
        console.log('Encontramos un par', n);
        arrPares.push(n);
    }
}
console.log(arrPares.reverse());
