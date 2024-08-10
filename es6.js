//template literals

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
    console.log("hola mundo");
})();

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

