alert("Solución - Programación Orientada a Objetos");


// Clase para registrar las opciones
class Opcion {
  constructor(texto) {
    this.texto = texto;
    this.votos = 0;
  }

  votar() {
    this.votos++;
  }
}

// Clase para las preguntas de la encuesta
class Pregunta {
  constructor(texto, opciones) {
    this.texto = texto;
    this.opciones = opciones.map(opcion => new Opcion(opcion));
  }

  votar(opcionTexto) {
    const opcion = this.opciones.find(
      (op) => op.texto.toLowerCase() === opcionTexto.toLowerCase()
    );
    if (opcion) {
      opcion.votar();
      return true; // Voto exitoso
    }
    return false; // Voto inválido
  }

  mostrarResultados() {
    let resultados = `${this.texto}\n`;
    this.opciones.forEach((op) => {
      resultados += `${op.texto}: ${op.votos} votos\n`;
    });
    return resultados;
  }
}

// Clase para la encuesta
class Encuesta {
  constructor(titulo) {
    this.titulo = titulo;
    this.preguntas = [];
  }

  agregarPregunta(textoPregunta, opciones) {
    const nuevaPregunta = new Pregunta(textoPregunta, opciones);
    this.preguntas.push(nuevaPregunta);
  }

  votarPregunta(index, opcionTexto) {
    if (this.preguntas[index].votar(opcionTexto)) {
      alert("¡Voto registrado!");
    } else {
      alert("Opción no válida.");
    }
  }

  mostrarResultados() {
    let resultados = `Resultados de la encuesta: ${this.titulo}\n\n`;
    this.preguntas.forEach((pregunta) => {
      resultados += pregunta.mostrarResultados() + "\n";
    });
    alert(resultados);
  }
}

// Interacción con el usuario para crear la encuesta
const tituloEncuesta = prompt("Ingrese el título de la encuesta:");
const encuesta = new Encuesta(tituloEncuesta);

// Asegurarse de que haya exactamente 8 preguntas
for (let i = 0; i < 8; i++) {
  const textoPregunta = prompt(`Escribe la pregunta ${i + 1}:`);
  const opciones = prompt("Escribe las opciones de respuesta separadas por comas:").split(",");
  encuesta.agregarPregunta(textoPregunta, opciones);
}

// Permitir al usuario votar
let continuarVotando = true;
while (continuarVotando) {
  const numPregunta = parseInt(prompt("Ingrese el número de la pregunta en la que desea votar (1 a 8):")) - 1;
  if (numPregunta >= 0 && numPregunta < 8) {
    const opcionVoto = prompt("Ingrese la opción en la que desea votar:");
    encuesta.votarPregunta(numPregunta, opcionVoto);
  } else {
    alert("Número de pregunta no válido.");
  }
  continuarVotando = confirm("¿Desea seguir votando?");
}

// Mostrar los resultados finales
encuesta.mostrarResultados();