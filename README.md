# SistemaVotaciones_ProyII
PROYECTO 2: Sistema de Votación en JavaScript

Construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. El programa debe cumplir con los siguientes requisitos:

Permitir a los usuarios crear encuestas con opciones de respuesta.
Permitir a los usuarios votar en las encuestas.
Mostrar los resultados de las encuestas en tiempo real.
Almacenar los datos de las encuestas y los votos en una variable.
Implementar la solución utilizando programación orientada a objetos (POO) y programación funcional (PF).

Primero empezamos por crear dos carpetas en el repositorio: poo y pf. Cada uno con su archivo index.html e index.js.

SOLUCION PF:

Desarrollamos el ejercicio con un enfoque funcional, para lo cual creamos funciones puras que reciban y retornen datos. Esta solución al ejercicio nos permite responder una encuesta de 8 preguntas divertidas sobre Chile y almacenar las respuestas y saber cuáles se respondieron correctamente y cuáles incorrectamente. 

La primera función es para crear las preguntas con sus opciones de respuesta y la respuesta correcta:

![image](https://github.com/user-attachments/assets/1dddef3d-8d60-4855-baea-1c6724e3ba9f)

También necesitamos de una función que compare la respuesta del usuario con la respuesta correcta.

![image](https://github.com/user-attachments/assets/191dd543-f6c3-48b1-a67a-4cd20588c38c)

Necesitamos crear una función para realizar la encuesta donde pasamos las preguntas al usuario y va a contabilizar las respuestas correctas, incorrectas y lo va a guardar dentro del array resultados.
De esta forma va a recorrer cada pregunta con sus opciones y obtenemos la respuesta del usuario en la variable "respUsuario". 
Si la respuesta del usuario es la correcta, le mostrará un mensaje por prompt "¡Correcto!", caso contrario le dirá "¡Incorrecto, la respuesta es: " 

![image](https://github.com/user-attachments/assets/3a138a82-a69a-4855-99cd-40f21131e980)
![image](https://github.com/user-attachments/assets/370046e3-52d3-406d-b41d-1ca8ae232492)

Para mostrar los resultados se necesita de una función donde tome como parámetros los resultados obtenidos, las respuestas correctas e incorrectas. Con esta función le decimos al programa que nos muestre el resultado final de cada pregunta, con su feedback y contabilizar las respuestas del usuario correctas e incorrectas. 

![image](https://github.com/user-attachments/assets/19bcfb06-144d-41d9-9212-2136c70e8b36)

Agregamos un console.log dentro de la función "mostrarResultados" justo después del alert, para que el resumen del cuestionario se muestre también en la consola de forma más legible.

Para las preguntas creamos un array y escribimos la pregunta, las opciones y la respuesta correcta y finalmente ejecutamos el cuestionario.
![image](https://github.com/user-attachments/assets/7a1d70bc-4da3-487f-8f7a-de81da9f34f9)

RESULTADO PF: 

![image](https://github.com/user-attachments/assets/02c38443-38ae-4297-bfb2-06c7079d40d0)


SOLUCION POO:

El siguiente enfoque utiliza POO mediante clases y métodos para manejar la lógica del programa. 
Esta solución nos permite crear una encuesta con sus preguntas y opciones para que el usuario pueda votar y se muestren los resultados obtenidos.

Esta clase nos permite guardar las opciones de las preguntas y creamos el método votar() donde va a ir sumando cada voto.

![image](https://github.com/user-attachments/assets/f7d0a04e-d39f-4224-be30-94c57732d895)

La clase Pregunta nos permite registrar la pregunta con sus múltiples opciones de respuesta mediante un array de objetos que convierte cada opción en una instancia de la clase Opcion.
Luego creamos los siguientes métodos: 
votar(): Recibe el número de opción que el usuario selecciona y se incrementa el voto.
mostrarResultados(): Muestra cuántos votos ha recibido cada opción.
mostrarPregunta(): Presenta la pregunta y sus opciones.

![image](https://github.com/user-attachments/assets/cc8a2fcd-6bba-4431-84e3-0842ba79e416)

Después en la clase Encuesta nos permite registrar el título de la encuesta y almacenar las preguntas que el usuario desee. 
Necesitamos de los siguientes métodos:
agregarPregunta(): Agrega una nueva pregunta a la encuesta.
votarPregunta(): Permite al usuario votar en una pregunta específica.
mostrarResultados(): Muestra los resultados completos en la consola.

![image](https://github.com/user-attachments/assets/6cabcd19-d179-413d-bf8e-954e230bfda3)

Creamos 2 variables para la interacción del usuario donde primero le pide al usuario que ingrese el título de la encuesta y luego crea una instancia de la clase Encuesta.

![image](https://github.com/user-attachments/assets/a402a3f9-662d-49d9-946f-97758f855e50)

Luego hacemos una validación donde el programa se asegura que haya 8 preguntas. Cada vez que el usuario ingrese una pregunta va a ir recorriendo de 1 en 1 hasta que no supere el límite de 8. Se utiliza el método de JavaScript split() que nos permite separar una cadena de texto, este caso le decimos que divida las opciones luego de cada (,).

![image](https://github.com/user-attachments/assets/8b5236e9-7007-4783-be98-87c000cd1b28)

Después creamos la variable continuarVotando para permitirle al usuario votar en cualquier pregunta repetidamente hasta que elija dejar de votar.

Finalmente le decimos que nos muestre los resultados de la encuesta:

![image](https://github.com/user-attachments/assets/dc049ec0-ed95-4f9e-99e2-8ed04526f775)

RESULTADO POO:

![image](https://github.com/user-attachments/assets/ded95f91-94ec-4afa-ae1a-2227c70433f2)

Desarrollado por: Christopher Pesántez - DWFS C16
