alert("Solución - Programación Orientada a Objetos");

// Clase para registrar las opciones
class Opcion {
  constructor(texto) {
    this.texto = texto;
    this.votos = 0;
  }
  //Método para incrementar los votos
  votar() {
    this.votos++;
  }
}

// Clase para la encuesta, definimos los parámetros e inicializamos los contadores de votos en 0
class Encuesta {
  constructor(titulo) {
    this.titulo = titulo;
    this.opciones = [];
    this.votosCorrectos = 0;
    this.votosIncorrectos = 0;
  }

  // Método para agregar una opción a la encuesta
  agregarOpcion(texto) {
    const nuevaOpcion = new Opcion(texto);
    this.opciones.push(nuevaOpcion);
  }

  // Método para registrar un voto implementando una validación
  votar(opcionTexto) {
    const opcion = this.opciones.find(
      (op) => op.texto.toLowerCase() === opcionTexto.toLowerCase()
    );
    if (opcion) {
      opcion.votar();
      this.mostrarResultados();
    } else {
      alert("Opción no encontrada, por favor ingrese una opción válida.");
    }
  }

  // Método para mostrar los resultados en tiempo real
  mostrarResultados() {
    let resultados = `Resultados para la encuesta: ${this.titulo}\n`;
    this.opciones.forEach((op) => {
      resultados += `${op.texto}: ${op.votos} votos\n`;
    });
    alert(resultados);
  }
}

// Interacción del usuario al crear la encuesta, registrar las opciones y votar
const tituloEncuesta = prompt("Ingrese el título de la encuesta:");
const encuesta = new Encuesta(tituloEncuesta);

let agregarMasOpciones = true;
while (agregarMasOpciones) {
  const opcionTexto = prompt("Ingrese una opción de respuesta:");
  encuesta.agregarOpcion(opcionTexto);
  agregarMasOpciones = confirm("¿Desea agregar otra opción?");
}

let continuarVotando = true;
while (continuarVotando) {
  const opcionVoto = prompt("Ingrese la opción en la que desea votar:");
  encuesta.votar(opcionVoto);
  continuarVotando = confirm("¿Desea seguir votando?");
}

//Finalmente mostramos los resultados de la encuesta
encuesta.mostrarResultados();
