// Mandamos a llamar a los elmentos del HTML que se van a manipular
var saludarUsario = document.getElementById('bienvenida'); 
var mostrarResultados = document.getElementById('contenedorPrincipal');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');
var first = document.getElementById("first");
mostrarResultados.style.visibility= "hidden";

var nombreUsuario = prompt("Ingresa tu nombre:");
saludarUsario.innerHTML = "😊 Bienvenid@ " + nombreUsuario + " 😊" ;

//iniciar partida
var boton = document.getElementById("boton");
boton.addEventListener("click", aceptar);

function aceptar(){
  first.style.display = "none";
  mostrarResultados.style.visibility= "visible";
  respuestasCorrectas.innerHTML = "<h4> Preguntas correctas </h4>";
  respuestasIncorrectas.innerHTML = "<h4> Preguntas incorrectas </h4>";

  /* PRIMERA PREGUNTA */
  var primeraPregunta = parseInt(prompt("1.¿Cuál es la bebida preferida de Gonzalo? \n 1. Agua \n 2. Cerveza \n 3. Vino"));
  if (primeraPregunta == 2) { //Ejemplo de opción con NÚMERO
    respuestasCorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>Respuesta correcta:</strong> 🍺 La cerveza 🍺";
  } else {
    respuestasIncorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>La respuesta correcta era:</strong> 🍺 La cerveza 🍺";
  }
  //SEGUNDA PREGUNTA
  var segundaPregunta = prompt("2.¿Qué es lo que más le gusta hacer a Lulú? \n A. Cantar \n B. Dibujar \n C. Programar");
  if (segundaPregunta == "A") { //Ejemplo de opción con LETRA
    //respuestasCorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  } else {
    respuestasIncorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  }

}

var boton2 = document.getElementById("boton2");
boton2.addEventListener("click", cancelar);
var cancel = document.getElementById("cancel");

function cancelar (){
  first.style.display= "none";
  mostrarResultados.style.display= "none";
  cancel.innerHTML = "<h1>Gracias por visitarnos, nos vemos la próxima 😉 </h1>";
}




