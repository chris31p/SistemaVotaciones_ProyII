alert("Solución - Programación Funcional");

// Función para crear una pregunta
const crearPregunta = (pregunta, opciones, respCorrecta) => ({
  pregunta,
  opciones,
  respCorrecta
});

// Creamos otra funcion que compara la respuesta del usuario con la respuesta correcta
const esRespuestaCorrecta = (respUsuario, respCorrecta) => respUsuario === respCorrecta;

//Luego creamos una funcion para realizar el cuestionario
const realizarCuestionario = (preguntas) => {
  let correctas = 0;
  let incorrectas = 0;
  let resultados = [];

  preguntas.forEach((pregunta, index) => {
      let mensaje = `${pregunta.pregunta}\n`;
      pregunta.opciones.forEach((opcion, idx) => {
          mensaje += `${idx + 1}. ${opcion}\n`;
      });

      //Creamos una variable donde obtenemos la respuesta del usuario
      const respUsuarioIndex = parseInt(prompt(mensaje, '')) - 1;
      const respuestaUsuario = pregunta.opciones[respUsuarioIndex];

      if (esRespuestaCorrecta(respuestaUsuario, pregunta.respCorrecta)) {
          alert('¡Correcto!');
          correctas++;
          resultados.push({
              numeroPregunta: index + 1,
              pregunta: pregunta.pregunta,
              esCorrecta: true,
              respUsuario: respuestaUsuario,
              respCorrecta: pregunta.respCorrecta
          });
      } else {
          alert(`Incorrecto. La respuesta correcta es: ${pregunta.respCorrecta}`);
          incorrectas++;
          resultados.push({
              numeroPregunta: index + 1,
              pregunta: pregunta.pregunta,
              esCorrecta: false,
              respUsuario: respuestaUsuario,
              respCorrecta: pregunta.respCorrecta
          });
      }
  });

  mostrarResultados(resultados, correctas, incorrectas);
};

//Necesitamos una función para mostrar los resultados del cuestionario
const mostrarResultados = (resultados, correctas, incorrectas) => {
  let mensajeResultados = "Resultados del cuestionario:\n\n";
  resultados.forEach((resultado) => {
      mensajeResultados += `Pregunta ${resultado.numeroPregunta}: ${resultado.pregunta}\n`;
      mensajeResultados += `Tu respuesta: ${resultado.respUsuario} - ${resultado.esCorrecta ? 'Correcta' : `Incorrecta, la respuesta correcta es: ${resultado.respCorrecta}`}\n\n`;
  });
  mensajeResultados += `Total Correctas: ${correctas}\nTotal Incorrectas: ${incorrectas}`;
  alert(mensajeResultados);
  console.log(mensajeResultados);
};

//Creamos un array para listar las preguntas
const preguntas = [
  crearPregunta('¿Cuál es la capital de Chile?', ["Valparaíso", "Santiago", "Concepción", "La Serena"], 'Santiago'),
  crearPregunta('Si alguien te dice “estoy pato”, ¿qué quiere decir?', ["Que está feliz", "Que está cansado", "Que no tiene dinero", "Que está enfermo"], 'Que no tiene dinero'),
  crearPregunta('¿Qué significa “al tiro”?', ["Más tarde", "Ahora mismo", "Nunca", "Mañana"], 'Ahora mismo'),
  crearPregunta('¿Qué significa “andar con la caña”?', ["Estar enamorado", "Estar resfriado", "Tener resaca", "Estar cansado"], 'Tener resaca'),
  crearPregunta('¿Qué famoso festival de música se celebra anualmente en Viña del Mar?', ["Lollapalooza", "Festival de Viña", "Rock in Rio", "Coachella"], 'Festival de Viña'),
  crearPregunta('¿Qué animal es el símbolo nacional de Chile?', ["Cóndor", "Puma", "Llama", "Guanaco"], 'Cóndor'),
];

//Ejecutamos el cuestionario
realizarCuestionario(preguntas);

