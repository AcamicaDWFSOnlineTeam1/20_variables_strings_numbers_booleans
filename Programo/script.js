console.log("Hola Mundo");
console.log("Emmanuel Hernández");
console.log("Adriana Silva");
console.log("Ale");
console.log("Jorge");
console.log("Miryam Quezada");
console.log("Juan Carlos R");
console.log("Miguel Ortega");
console.log('Fanny');
console.log("itzel");

// variables - var
// Sintaxis
// var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];
// let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN];
// const name1 = value1[, name2 = value2[, ...[, nameN = valueN]]];

//console(nombre);

//números
var nombre = "Juan";   // Declaración

//
var apellidoPaterno = "Gonzalez";   // Declarar e inicialización
var apellidoMaterno = "Pérez";
var edad = 40;
var unaVariabe = 293;

/*let var = "Hola";
let 
var
const
true
false
if
else
string
console*/

//edad != Edad

//console.log(Edad);

    
// lower cammer case
/*
asfaf
asf
as
f
asd
fa
sdf
asd
fas
dfa
sfd
asdf
*/

console.log(unaVariable);


//const NOMBRE_COMPLETO = "JUAN PEREZ"; /
//console.log(NOMBRE_COMPLETO);

// NOMBRE_COMPLETO = "NUEVO";

var varConNumero1;
var VarConNumero1;
var varConGuionBajo_;

// No se permiten variables con nombres de 
// palabras reservadas
// var for;

var diferente = 93;
console.log("Tipo de 93: " + typeof(diferente) );

diferente = "93";
console.log("Tipo de 93: " + typeof(diferente));

//booleanos
var boolean = true;
console.log("Tipo de true: " + typeof(boolean));
console.log("Valor de boolean: " + boolean);
console.log(boolean);

boolean = false;
console.log(boolean);

//strings
var string = "Hola";
console.log("Tipo de 'Hola': " + typeof(string));
console.log(string);
var string2 = "93";
console.log("Tipo de '93': " + typeof(string));
console.log(string2);
var string3 = "true";
console.log("Tipo de 'true': ${string}" + typeof(string));
console.log(string3);

console.log(`${string} mundo!!!`);

console.log(string + " " + string2);

console.log();

var number1 = 93;
var number2 = "1";

console.log(number1 + number2);

//infinity
var infinity = 5 / 0;
console.log("Tipo de infinity: " + typeof(infinity));
console.log(infinity); //conversión de tipo

//a número - parseInt
var string2 = '123';
var string2tonum = parseInt(string2);
console.log("Valor de '123' pasado a número: " + string2tonum);
var string3 = '123ab';
var string3tonum = parseInt(string3);
console.log("Valor de '123ab' pasado a número: " + string3tonum);
var string4 = 'ab123';
var string4tonum = parseInt(string4);
//parseFloat
console.log("Valor de 'ab123' pasado a número: " + string4tonum);

console.log("string2: ", string2);

//NaN
//isNaN, chequear si algo es NaN
console.log("Es '123' pasado a número NaN: " + isNaN(string2tonum));
console.log("Es '123ab' pasado a número NaN: " + isNaN(string3tonum));
console.log("Es 'ab123' pasado a número NaN: " + isNaN(string4tonum));

//confirm
//var acceptCond = confirm("Acepta las condiciones de uso?");
var acceptCond = true;
console.log(acceptCond);

//condicionales
//if, else if, else
if (acceptCond === true) {
    console.log("Aceptó");
} else {
    console.log("No aceptó");
}

//operador ternario - mismo codigo abreviado
console.log((acceptCond === true) ? "Aceptó" : "No aceptó");
console.log((acceptCond === true) ? "Cervantes" : "Lara");
console.log((acceptCond === true) ? "Miryam" : "Quezada");
console.log(acceptCond === true ? "Hernández" : "Lira");
console.log((acceptCond != true) ? "Becerra" : "Fanny"); //Va a explotar xD
console.log((acceptCond === true) ? "Silva" : "Martínez");
console.log((acceptCond === true) ? "Ortega" : "Guevara");
console.log((acceptCond == true) ? "Juan Carlos" : "Ramirez");
console.log((acceptCond === true) ? "Aceves" : "Amador");
console.log((acceptCond === true) ? "Sofia" : "Rodriguez");
console.log((acceptCond === true) ? "Flores" : "Jimenez");
console.log((acceptCond === true) ? "itzel" : "santiago");

//operadores aritméticos: +, - , * , /
//conversion implicita ej '3' + 3 = '33'
console.log("4 + 4 = " + 4 + 4);
//una forma de evitarlo
console.log("4 + 4 = " + (4 + 4));
console.log("4 - 4 = " + (4 - 4));
console.log("4 / 4 = " + (4 / 4));
console.log("4 * 4 = " + (4 * 4));

//operadores de comparación: ==, ===, !==, !=, >, <, <=, >=
//operadores de comparación: ==, ===, !==, !=, >, <, <=, >=
console.log((9 === 9) ? "itzel" : "santiago");
var num = 7;
if (num < 10) {
    console.log("El número " + num + " es menor a 10");
} else if (num > 10) {
    console.log("El número " + num + "  es mayor a 10");
} else {
    console.log("El número es 10");
}

if (num === '7') {
    console.log("El número " + num + " es igual a '7' en tipo y valor");
} else if (num !== '7') {
    console.log("El número " + num + " es igual a '7' en valor y no en tipo");
} else {
    console.log("El número no es ni el número 7, ni la string '7'");
}


//operadores lógicos: &&, ||, !
console.log("false && false = " + false && false);
console.log("false && true = " + false && true);
console.log("true && true = " + true && true);
console.log("false || false = " + false || false);
console.log("false || true = " + false || true);
console.log("true || true = " + true || true);
console.log("!true = " + !true);
console.log("!false = " + !false);
console.log("varios operadores", true && true && false && true);

//prompt - pedir input al usuario
var name2 = "Juan"; //prompt("Ingrese su nombre");
console.log(name2);
//alert
//String method: .toLowerCase()
alert("Su nombre en minúscula es: " + name2.toLowerCase());
//String method: .toUpperCase()
alert("Su nombre en mayúscula es: " + name2.toUpperCase());

"Pedro".toLowerCase();

/////////////
// Solicita al usuario 2 números a través de la función prompt 
// y muestra el resultado de la suma de ambos mediante la función alert.
//Juan ";
var apellidoPaterno = "Gonzalez";
var apellidoMaterno = "Pérez";
var edad = 40;
var unaVariable = 293;
console.log(unaVariable);


const NOMBRE_COMPLETO = "JUAN PEREZ";
console.log(NOMBRE_COMPLETO);

// NOMBRE_COMPLETO = "NUEVO";

var varConNumero1;
var VarConNumero1;
var varConGuionBajo_;

// No se permiten variables con nombres de 
// palabras reservadas
// var for;

var diferente = 93;
console.log("Tipo de 93: " + typeof(diferente));

diferente = "93";
console.log("Tipo de 93: " + typeof(diferente));

//booleanos
var boolean = true;
console.log("Tipo de true: " + typeof(boolean));
console.log(boolean);

boolean = false;
console.log(boolean);

//strings
var string = "Hola";
console.log("Tipo de 'Hola': " + typeof(string));
console.log(string);
var string2 = "93";
console.log("Tipo de '93': " + typeof(string));
console.log(string2);
var string3 = "true";
console.log("Tipo de 'true': " + typeof(string));
console.log(string3);

console.log(string + " " + string2);


var number1 = 93;
var number2 = "1";

console.log(number1 + number2);

//infinity
var infinity = 5 / 0;
console.log("Tipo de infinity: " + typeof(infinity));
console.log(infinity); //conversión de tipo

//a número - parseInt
var string2 = '123';
var string2tonum = parseInt(string2);
console.log("Valor de '123' pasado a número: " + string2tonum);
var string3 = '123ab';
var string3tonum = parseInt(string3);
console.log("Valor de '123ab' pasado a número: " + string3tonum);
var string4 = 'ab123';
var string4tonum = parseInt(string4);
console.log("Valor de 'ab123' pasado a número: " + string4tonum);

console.log("string2: ", string2);

//NaN
//isNaN, chequear si algo es NaN
console.log("Es '123' pasado a número NaN: " + isNaN(string2tonum));
console.log("Es '123ab' pasado a número NaN: " + isNaN(string3tonum));
console.log("Es 'ab123' pasado a número NaN: " + isNaN(string4tonum));

//confirm
//var acceptCond = confirm("Acepta las condiciones de uso?");
var acceptCond = true;
console.log(acceptCond);

//condicionales
//if, else if, else
if (acceptCond === true) {
    console.log("Aceptó");
} else {
    console.log("No aceptó");
}
//operador ternario - mismo codigo abreviado
console.log((acceptCond === true) ? "Aceptó" : "No aceptó");
console.log((acceptCond === true) ? "Cervantes" : "Lara");
console.log((acceptCond === true) ? "Miryam" : "Quezada");
console.log(acceptCond === true ? "Hernández" : "Lira");
console.log((acceptCond != true) ? "Becerra" : "Fanny"); //Va a explotar xD
console.log((acceptCond === true) ? "Silva" : "Martínez");
console.log((acceptCond === true) ? "Ortega" : "Guevara");
console.log((acceptCond == true) ? "Juan Carlos" : "Ramirez");
console.log((acceptCond === true) ? "Aceves" : "Amador");
console.log((acceptCond === true) ? "Sofia" : "Rodriguez");
console.log((acceptCond === true) ? "Flores" : "Jimenez");
console.log((acceptCond === true) ? "itzel" : "santiago");

//operadores aritméticos: +, - , * , /
//conversion implicita ej '3' + 3 = '33'
console.log("4 + 4 = " + 4 + 4);
//una forma de evitarlo
console.log("4 + 4 = " + (4 + 4));
console.log("4 - 4 = " + (4 - 4));
console.log("4 / 4 = " + (4 / 4));
console.log("4 * 4 = " + (4 * 4));

//operadores de comparación: ==, ===, !==, !=, >, <, <=, >=
//operadores de comparación: ==, ===, !==, !=, >, <, <=, >=
console.log((9 === 9) ? "itzel" : "santiago");
var num = 7;
if (num < 10) {
    console.log("El número " + num + " es menor a 10");
} else if (num > 10) {
    console.log("El número " + num + "  es mayor a 10");
} else {
    console.log("El número es 10");
}

if (num === '7') {
    console.log("El número " + num + " es igual a '7' en tipo y valor");
} else if (num == '7') {
    console.log("El número " + num + " es igual a '7' en valor y no en tipo");
} else {
    console.log("El número no es ni el número 7, ni la string '7'");
}


//operadores lógicos: &&, ||, !
console.log("false && false = " + false && false);
console.log("false && true = " + false && true);
console.log("true && true = " + true && true);
console.log("false || false = " + false || false);
console.log("false || true = " + false || true);
console.log("true || true = " + true || true);
console.log("!true = " + !true);
console.log("!false = " + !false);
console.log("varios operadores", true && true && false && true);

//prompt - pedir input al usuario
var name2 = "Juan"; //prompt("Ingrese su nombre");
console.log(name2);
//alert
//String method: .toLowerCase()
alert("Su nombre en minúscula es: " + name2.toLowerCase());
//String method: .toUpperCase()
alert("Su nombre en mayúscula es: " + name2.toUpperCase());


/////////////
// Solicita al usuario 2 números a través de la función prompt 
// y muestra el resultado de la suma de ambos mediante la función alert.
var numeroA = parseInt(prompt("Ingresa un número"));
var numeroB = parseInt(prompt("Ingresa un número"));

var resultado = numeroA + numeroB;

alert(resultado);

alert(numeroA + numeroB);





let cadenaA = prompt("Ingresa un número");
console.log("Cadena A = " + cadenaA);

if (isNaN(cadenaA)) {
    cadenaA = prompt("Ingresa un número")
}

let numeroA = parseFloat(cadenaA);
let cadenaB = prompt("Ingresa otro número");
console.log("Cadena B = " + cadenaB);
let numeroB = parseFloat(cadenaB);
let resultado = numeroA + numeroB;
alert("El resutlado es: " + resultado);







