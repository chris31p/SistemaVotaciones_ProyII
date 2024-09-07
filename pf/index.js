alert("Solución - Programación Funcional");

// Función para crear una nueva encuesta
const crearEncuesta = (titulo, opciones) => {
  return {
    titulo,
    opciones: opciones.map((opcion) => ({
      texto: opcion,
      votos: 0,
    })),
  };
};

// Función para votar en una opción
const votarEnEncuesta = (encuesta, opcionTexto) => {
  const opcionEncontrada = encuesta.opciones.some(
    (opcion) => opcion.texto.toLowerCase() === opcionTexto.toLowerCase()
  );
  if (opcionEncontrada) {
    encuesta.opciones = encuesta.opciones.map((opcion) =>
      opcion.texto.toLowerCase() === opcionTexto.toLowerCase()
        ? { ...opcion, votos: opcion.votos + 1 }
        : opcion
    );
    mostrarResultadosEncuesta(encuesta);
  } else {
    alert("Opción no encontrada, por favor ingrese una opción válida.");
  }
};

// Función para mostrar los resultados de una encuesta en alerta y consola
const mostrarResultadosEncuesta = (encuesta) => {
  let resultados = `Resultados para la encuesta: ${encuesta.titulo}\n`;
  encuesta.opciones.forEach((op) => {
    resultados += `${op.texto}: ${op.votos} votos\n`;
  });
  alert(resultados);        // Mostrar en alerta
  console.log(resultados);  // Mostrar en consola
};

// Interacción con el usuario
const tituloEncuesta = prompt("Ingrese el título de la encuesta:");
const opciones = [];
let agregarMasOpciones = true;

// Agregar exactamente 8 preguntas
for (let i = 0; i < 8; i++) {
  const opcionTexto = prompt(`Ingrese la opción de respuesta ${i + 1}:`);
  opciones.push(opcionTexto);
}

const encuesta = crearEncuesta(tituloEncuesta, opciones);

let continuarVotando = true;
while (continuarVotando) {
  const opcionVoto = prompt("Ingrese la opción en la que desea votar:");
  votarEnEncuesta(encuesta, opcionVoto);
  continuarVotando = confirm("¿Desea seguir votando?");
}
