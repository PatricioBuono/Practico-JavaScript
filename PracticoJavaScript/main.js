{console.log("1.INTRODUCCION");
console.log("Ejercicio 1.2");  
let a = 7;
let b = 3;
let c = a + b;
console.log("La suma entre a y b es: ", c);
} // uso {} para que las variables sean validas solo en esa porcion de codigo
/*
console.log("-------------------------------"); // Separador de Ejercicios

{console.log("Ejercicio 3");
const nombre = prompt("¿Cual es tu nombre?");
console.log("Hola ", nombre,"!");
console.log("-------------------------------");
}

console.log("2.OPERADORES LOGICOS Y CONDICIONALES");

{console.log("Ejercicio 2.1");
let a = 6;
let b = 20;
let c = 8;
if (a > b && a > c){
  console.log("El mayor de los tres numeros es ", a);
} else if (b > a && b > c){
  console.log("El mayor de los tres numeros es ", b);
} else {
  console.log("El mayor de los tres numeros es ", c);
}
}
console.log("-------------------------------");


{console.log("Ejercicio 2.2");
const numero = prompt("Ingresa un numero y te dire si es par o impar");
if (numero % 2 == 0){
  console.log("El numero ", numero, "es par");
}else {
  console.log("El numero", numero, "es impar");
}
}
console.log("-------------------------------");


console.log("3.OPERADORES DE ASIGNACION Y BUCLES");
{console.log("Ejercicio 3.1");
let contador = 10;
while(contador >0){
  console.log(contador--);
} 
}
console.log("-------------------------------");


{console.log("Ejercicio 3.2");
let numero;
do{
  numero = prompt("Ingrese un numero mayor a 100: ");
} while(numero <= 100);
console.log("Ingresaste un numero mayor a 100: ", numero);
}
console.log("-------------------------------");

console.log("4.FUNCIONES DE JAVASCRIPT");
{console.log("Ejercicio 4.1");
const esPar = (numero) => {
  if(numero % 2 == 0) return true;
  else return false;
};
let numeroA = 12;
let numeroB = 15;
console.log("El numero: ", numeroA, "es par: ", esPar(numeroA));
console.log("El numero: ", numeroB, "es impar: ", esPar(numeroB));
}
console.log("-------------------------------");

{console.log("Ejercicio 4.2");
const convertirCelsiusAFahrenheit = (celsius) =>{
  return celsius * 1.8 + 32;
}
let gradoCelsius = 30;
console.log(gradoCelsius, "ºC es equivalente a ", convertirCelsiusAFahrenheit(gradoCelsius), "ºF");
}
console.log("-------------------------------");

console.log("5.OBJETOS EN JAVASCRIPT");
{console.log("Ejercicio 5.1");
let persona = {
  nombre: "Diego",
  edad: 24,
  ciudad: "Barcelona",

  cambiarCiudad(ciudadNueva){
    this.ciudad = ciudadNueva;
  }
};
persona.cambiarCiudad("Monaco");
console.log(
  "Persona: ", persona.nombre,
  ", Edad: ", persona.edad,
  ", Ciudad: ", persona.ciudad
);
}
console.log("-------------------------------");

{console.log("Ejercicio 5.2");
const libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,

  esAntiguo: (año) =>{
    if(2024 - año > 10) return true;
    else return false;
  }
};
if(libro.esAntiguo(libro.año)){
  console.log("El libro '", libro.titulo, "' es antiguo: ", libro.esAntiguo(libro.año));
} else {
  console.log("El libro '", libro.titulo, "' es reciente: ", libro.esAntiguo(libro.año));
}
}
console.log("-------------------------------");

console.log("6.ARRAYS");
{console.log("Ejercicio 6.1");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let double = [];
for (let i = 0; i < numeros.length; i++){
  double[i] = 2 * numeros[i];
}
console.log("Numeros Originales: ", numeros.join(", "));
console.log("Numeros multiplicados por 2: ", double.join(", "));
}
console.log("-------------------------------");

{console.log("Ejercicio 6.2");
let pares = [];
let index = 0;
for (let i = 1; i <= 20; i++){
  if(i % 2 == 0){
    pares[index] = i;
    index ++;
  }
}
console.log("Primeros 10 numeros pares:", pares.join(", ")); 
}
console.log("-------------------------------");

console.log("7.INTRODUCCION AL DOM");
{console.log("Ejercicio 7.1");
const button = document.getElementById("button");
const contenedor = document.getElementById("contenedor");

button.addEventListener("click",() =>{
  contenedor.classList.add("BlueContenedor");
});
}
console.log("-------------------------------");

{console.log("Ejercicio 7.2");
const buttonAlerta = document.getElementById("buttonAlerta");
const inputTexto = document.getElementById("inputTexto");

buttonAlerta.addEventListener("click", () => {
  const textoIngresado = inputTexto.value;
  const mensaje = alert("Has ingresado: "+ textoIngresado);
});
}
console.log("-------------------------------");

console.log("8.EVENTOS EN DOM");
{
console.log("Ejercicio 8.1");
const elemento1 = document.getElementById("Elemento1");
const elemento2 = document.getElementById("Elemento2");
const elemento3 = document.getElementById("Elemento3");
const elemento4 = document.getElementById("Elemento4");

elemento1.addEventListener("click", () => {
  console.log(elemento1.textContent);
});
elemento2.addEventListener("click", () => {
  console.log(elemento2.textContent);
});
elemento3.addEventListener("click", () => {
  console.log(elemento3.textContent);
});
elemento4.addEventListener("click", () => {
  console.log(elemento4.textContent);
});
}
console.log("-------------------------------");

{console.log("Ejercicio 8.2");
const deshabilitador = document.getElementById("Deshabilitador");
const habilitador = document.getElementById("Habilitador");
const texto = document.getElementById("texto");
deshabilitador.addEventListener("click", (even) => {
  even.preventDefault();
  texto.disabled = true;
});
habilitador.addEventListener("click", (even) => {
  even.preventDefault();
  texto.disabled = false;
});
}
console.log("-------------------------------");


console.log("9.LOCALSTORAGE");
{console.log("Ejercicio 9.1");
const getDataInputs = () => {
  const email = document.getElementById("email").value;
  if (email.trim() === ""){
    return null;
  }
  localStorage.setItem("datos",
    JSON.stringify({email})
  );
  return email;
}
const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");

saveButton.addEventListener("click", () => {
  
  getDataInputs();
  const result = localStorage.getItem("datos");
  if (result) {
    const emailData = JSON.parse(result);
    console.log(emailData);
    
    const emailDisplay = document.getElementById("emailDisplay");
    emailDisplay.textContent = `Correo guardado: ${emailData.email}`
  } else {
    console.log("No se han ingresado datos");
  }
});

deleteButton.addEventListener("click", () =>{
  const result = localStorage.getItem("datos");
  if (result){
    localStorage.removeItem("datos");
  } else {
    console.log("No hay datos para eliminar");
  }
});
}
*/
