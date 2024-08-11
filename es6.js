//template literals

let month = "october";
let passPort = "123569875";

const inicio = () =>{
    //funcion tradicional
    function saludar2(nombre){
        return "hola "+ nombre;
    }

    //funcion flecha o arrow function
    const saludar = (nombre) => `hola ${nombre}`;
    const calcularNacimiento = (edad) => 2023-edad;

    let nombrePersona = prompt("ingresa tu nombre");

    let edadPersona = prompt("ingresa tu edad");
    let resultadoCalculo = calcularNacimiento(edadPersona);

//let result = "Hola " + resultadoSaludo + "tu año de nacimiento es: " +resultadoCalculo;

// esto es un template literal
    let result2 = `${saludar(nombrePersona)} tu año de nacimiento es ${resultadoCalculo}`;

    console.log(result2);
}

//inicio();

// IIFE
//inmediately invoked  fuction expression
// para funciones que se cargen una vez en la pagina
(function () {
    let month = "november";
    let identification = "123456789"
    console.log(`hola mundo ${month} ${identification} ${passPort}`);
})();
const arrayMethod = () => {
    // arrays
    const baloto = [18, 28, 38, 80, 90]
    console.log(baloto);

    //agregar un elemento al final del array
    baloto.push(30);
    console.log(baloto);

    //agregar un elemento al inicio del array
    baloto.unshift(4);
    console.log(baloto);

    //eliminar el ultimo elemento del array
    baloto.pop();
    console.log(baloto);

    //eliminar el primer elemento del array
    baloto.shift();
    console.log(baloto);

    //map podemos retornar el valor de una variable
    const array2 = baloto.map((el) => el = el*2);
    console.log(array2);

    //forEach no podemos retornar el valor de una variable
    baloto.forEach((el) => {
        console.log(el);
    });

    //filter podemos filtrar los elementos de una array
    const filtersNumbers = baloto.filter((el) => el >= 30);
    console.log(filtersNumbers);
}
//console.log(identification);

// hoisting
const hoisting = () => {
    const year = 2023;
    console.log(year);
    //forma incorrecta para llamar una funcion
    testFuction();

    function testFuction () {
        console.log("soy una funcion de prueba");
    }

    //forma correcta de llamar una funcion
    const testFuction2 = () => {
        console.log("soy una funcion de prueba2");
    }

    testFuction2();
}

// collback funcion como parametro de otra funcion
const demoCallback = () => {

    const saludar = (funcion) => {
        console.log("hola mundo");
        funcion();
    }

    const despedir = () => {
        console.log("adios");
    }
    saludar(despedir);

    const timer = (fn) => {
        console.log("la siguiente funcion se ejecutara en 5 segundos");
        setTimeout(fn, 5000);
    }
    timer(despedir);

    setTimeout(()=>{
        console.log("han pasado 4 segundos");
    }, 4000);

    //setInterval se ejecuta cada cierto tiempo
    const seDespide = setInterval(despedir, 2000);

    // detener intervalo
    const intervalo = setInterval(() => {
        console.log("universidad");
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalo);
        clearInterval(seDespide);
    }, 6000);

    //poner reloj
    /*const reloj = setInterval(() => {
        let date = new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    })*/

}
//demoCallback();

//promesas
const demoPromesas = () => {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("la promesa se resolvio a los dos segundos");
        }, 2000);
    })

    promesa
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

    let promesa2 = new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 10);
        if(number % 2 ===0) {
            resolve(number);
        }else{
            reject(number);
        }
    });

    promesa2
    .then((response) => console.info(`el numero ${response} es par`))
    .catch((error) => console.error(`el numero ${error} es impar`));
}

demoPromesas();
