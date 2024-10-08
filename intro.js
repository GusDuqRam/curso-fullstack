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

function ejemploCondiciones(){
    // vamos a ver si la persona puede entrar a un bar

    let mayoriaEdad =18;
    let edadPersona = persona.edad;

    if(edadPersona >= mayoriaEdad){
        console.log("Puede entrar al bar");
    } else{
        console.log("No puede entrar al bar");
    }

    // condicional con varios casos
    const edadPesnsionMasculina = 62;
    const edadPensionFemenina = 57;

    if (persona.edad >= edadPesnsionMasculina && persona.sexo == "M" && persona.semanasCotizadas >= 1300){
        console.log("Puede pensionarse");
    } else if(persona.edad >= edadPensionFemenina && persona.sexo == "F" && persona.semanasCotizadas >= 1300){

    } else {
        console.error("No se puede pensionar");
    }

    // condicional con el operador OR ||

    if(persona.cedula || persona.pasaporte){
        console.log("Puede salir del pais");
    } else {
        console.log("No puede salir del pais");
    }

    //switch o case
    let dia = "viernes";
    switch(dia) {
        case "lunes":
            console.log("Hoy es Lunes");
            break;
        case "martes":
            console.log("Hoy es Martes");
            break;
        case "miercoles":
            console.log("Hoy es Miercoles");
            break;
        case "jueves":
            console.log("Hoy es Jueves");
            break;
        case "viernes":
            console.log("Hoy es Viernes");
            break;
    }

    // operador ternario
    if(persona.sexo = "M"){
        console.log("Es hombre");
    } else {
        console.log("Es mujer");
    }

    // es lo mismo que el codigo anterior
    persona.sexo == "M" ? console.log("Es hombre") : console.log("Es mujer");

    persona.semanasCotizadas >= 1300 && persona.edad >= edadPesnsionMasculina && persona.sexo == "M" ? console.log("Es hombre") : console.log("Es mujer");

}
//ejemploCondiciones();

function ejemploCiclos(){
    //ciclos, bucles, loops
    //for
    for(let i=0; i<=5; i++){
        console.log(i + " elefante se balanceaba sobre la tela de un araña, como veian que resistia fueron a llamar otro elefante")
    }

    for(let i=0; i<nombres.length; i++){
        console.log(nombres[i]);
    }

    //while mientras
    while(persona.edad < 30){
        console.log("para tener treinta años le faltan " + (30-persona.edad) + " años");
        persona.edad++;
    }

    //do while, haz mientras
    let opcion = 0;
    do{
        opcion++;
        console.log("Bienvenido a Mario Kart");
        console.log("1. Jugar");
        console.log("2. Configuracion");
        console.log("3. Salir");
    }while(opcion != 4);
}
//ejemploCiclos();

// funciones
function saludar (nombre, edad=19){
    console.log("Hola, " + nombre + " te doy la bienvenida al programa");
        if(edad >= 18){
            console.log("Puede jugar");
        }
}
saludar("Oscar", 15);
saludar(persona.nombre);