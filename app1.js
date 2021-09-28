alert("Funciones recursivas")
text = "hola que tal"
alert("ejerciocio 1")
function stringInvertido(texto) {
    return texto.reverse(" ");
}

alert ("Ejemplo")
alert ("No sale  ToT")
alert ("Ya salio ^w^")
alert (text)
let reverseString = reverse(text)
alert (reverseString)
alert("ejerciocio 2")

var limit = 15;
	var fibonacci = [0,1];

	for(i=2; i <= limit; i++){
		fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
}
alert(fibonacci)

alert("ejercicio 3")
number = "12345"
function reverse (number) {
    if (number === "") {
        return " ";
    } else {
        return reverse(number.substr(1)) + number.charAt(0);
    }
}

let reversednumber = reverse(number)
alert(number)
alert(reversednumber)



alert("Ejercicio4")
alert("5^3")
var elevar = (5 ** 3)
alert(elevar)


alert("Ejercicio5")

let numeros = [1, 9]
alert("rango[1,9]")

function suma_todos (numeros) {
  let inicio = numeros[0];
  let fin = numeros[1];
  let suma = 0;
  
  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }
  
  return suma;
}

alert(suma_todos(numeros))

function palindromo(texto) {
    return texto.split('').reverse().join('') == texto;
}

alert(palindromo("oso"));



alert ("Pongame 10 profe >_<")