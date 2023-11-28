//Acceder a los elementos de un array
document.write("<h3>Elementos de un Arrays</h3>")
const numbers = [1, 2, 3, 4, 5]
document.write("El arreglo en su primera posicion es: " + numbers[0] + "<br>")

document.write("El arreglo en la posicion dos: " + numbers[2] + "<br>")

//usar variables para acceder a los elementos de un array

let index = 4
document.write("La variable index corresponde a: " + numbers[index] + "<br>")

//modificar elementos de un array

numbers[0] = 10
numbers[2] = 30

document.write ("La modificacion corresponde a: " + numbers + "<br>")

//longitud de un array

document.write("<h3>Longitud de un Array</h3>")

const fruta = ["Manzana", " Pera", " Platano", " Fresa"]
document.write("El Array de frutas es: " + fruta + "<br>")
document.write("El Array de frutas tiene una longitud de:  " + fruta.length + "<br>")

//Metodos de arrays

document.write("<h2>Metodos de un Array</h2>")

//Metodo push

document.write("<h3>Metodo push</h3>")
const frutas = ["Platano", " Fresa"]
document.write("El Array de frutas es: " + frutas + "<br>")
document.write("El array tiene una longitud de: " + frutas.length + "<br>")

//añade un elemento al final del array

frutas.push(" Naranja")
document.write("La fruta que se añadio es: " + frutas[frutas.length - 1] + "<br>")
document.write("La nueva modificacion a la lista es: " + frutas + "<br>")
document.write("El array tiene una longitud de: " + frutas.length + "<br>")

//Metodo pop

document.write("<h3>Metodo pop</h3>")
const frutaa = ["Platano", " Fresa", " Naranja"]
document.write("El Array de frutas es: " + frutaa + "<br>")

//elimina el ultimo elemento del array y lo devuelve

const ultimafruta = frutaa.pop()
document.write("La fruta que se elimino es: " + frutas[frutas.length - 1] + "<br>")
document.write("La nueva modificacion a la lista es: " + frutaa + "<br>")

//Metodo shift

document.write("<h3>Metodo shift</h3>")
const fruta1 = ["Platano", " Fresa", " Naranja"]
document.write("El Array de frutas es: " + fruta1 + "<br>")

//elimina el primer elemento del array y lo devuelve

const primerafruta = fruta1.shift()
document.write("La fruta que se elimino es: " + primerafruta + "<br>")
document.write("La nueva modificacion a la lista es: " + fruta1 + "<br>")

//Metodo unshift

document.write("<h3>Metodo unshift</h3>")
const fruta2 = [" Platano", " Fresa", " Naranja"]
document.write("El Array de frutas es: " + fruta2 + "<br>")

//añade un elemento al inicio del array

fruta2.unshift("Manzana")
document.write("La fruta que se añadio es: " + fruta2[0] + "<br>")
document.write("La nueva modificacion a la lista es: " + fruta2 + "<br>")

//Concat

document.write("<h3>Metodo Concat</h3>")
const numbers1 = [1, 2, 3]
document.write("Primer conjunto de numeros es: " + numbers1 + "<br>")
const numbers2 = [4, 5]
document.write("Segundo conjunto de numeros es: " + numbers2 + "<br>")
document.write("En el array se concateno los dos conjuntos " + numbers1.concat(numbers2) + "<br>")

//Usando operador ...

document.write("<h2>Ejercico</h2>")
document.write("<p>En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es: El primer elemento lo sacamos del array, ya que es el nombre del cliente. Añadimos al principio del array la cadena de texto bebida, ya que es una promoción que tenemos. Después añadimos al final del array el nombre del usuario que sacamos antes.Recuerda que debes devolver el array modificado:</p>")
function procesarPedido(pedidos) {
    const cliente = pedidos.shift()
    pedidos.unshift("bebida")
    pedidos.push(cliente)
    return pedidos
}


document.write("<h2>Iteracion de arrays</h2>")

//bucle while

document.write("<h3>Bucle while</h3>")

let frutass = ["🍎", " 🍌", " 🍓"];
let i = 0;
while (i < frutass.length) {
    document.write(frutass[i] + "<br>");
    i++;
}

//bucle for

document.write("<h3>Bucle for</h3>")
const frutas1 = ["🍎", " 🍌", " 🍓"];
for (let i = 0; i < frutas1.length; i++) {
    document.write(frutas1[i] + "<br>");
}

//bucle for...of

document.write("<h3>Bucle for...of</h3>")

const frutas2 = ["🍎", " 🍌", " 🍓"];
for (let fruta of frutas2) {
    document.write(fruta + "<br>");
}

//Metodo array.forEach

document.write("<h3>Metodo array.forEach</h3>")
const frutas3 = ["🍎", " 🍌", " 🍓"];
frutas3.forEach(function (fruta, index, originalArray) {
    document.write(fruta + "<br>");
});