// formas de crear una variable

elNombre = "Juan";
var primerNombre = "Juan";
let segundoNombre = "Juan"; // se puede reasignar
const apellido = "Rodriguez"; //no se puede reasignar

//tipos de datos

//string
let nombre = "Gustavo Duque";
let direccion = "Calle 45 # 170-8";
let correo = "correo@gmail.com";

//number
let edad = 25;
let peso = 70.5;
let telefono = 3153236589;

//boolean
let esMayorDeEdad = true;
let esMenorDeEdad = false;

//undefined
let reporteDatacredito;
let reporteSisben;

//null
let puntajeDatacredito = null;

// array, arreglos, vectores, matrices

let nombres = ["Juan", "Pedro", "Maria", "Luisa"];
let edades = [25, 30, 20, 18];
let baloto = [1, 2, 3, 14, 25, 56];
let datos = ["Juan", 25, true, null];

// objetos, objects

let persona = {
    nombre: "juan",
    edad: 25,
    esMayorDeEdad: true,
    puntajeDatacredito: null,
    reporteSisben: undefined,
    coloresFavoritos: ["rojo", "verde", "azul"],
    fechaDeNacimiento: {
        dia: 15,
        mes: 12,
        año: 1995
    },
    fechaExpedicion: "2020-01-01",
}

// vamos a ver si la persona puede entrar a un bar

let mayoriaEdad =18;
let edadPersona = persona.edad;

if(edadPersona >= mayoriaEdad){
    console.log("Puede entrar al bar")
}