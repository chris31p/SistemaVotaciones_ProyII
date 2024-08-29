alert("POO")
// Paso 1: Definir la estructura de datos para las preguntas y las respuestas
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["París", "Londres", "Roma"],
        correctAnswer: "París",
        userAnswer: null
    },
 
    {
        question: "¿Cuál es la capital de Inglaterra?",
        options: ["Madrid", "Londres", "Berlín"],
        correctAnswer: "Londres", userAnswer: null
    },
    {
        question: "¿Cuál es la capital de España?",
        options: ["Madrid", "Barcelona", "Sevilla"],
        correctAnswer: "Madrid",
        userAnswer: null
    },
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["Milán", "Roma", "Nápoles"],
        correctAnswer: "Roma",
        userAnswer: null
    },
    {
        question: "¿Cuál es la capital de Alemania?",
        options: ["Hamburgo", "Berlín", "Múnich"],
        correctAnswer: "Berlín",
        userAnswer: null
    },
    {
        question: "¿Cuál es la capital de Rusia?",
        options: ["Moscú", "San Petersburgo", "Sochi"],
        correctAnswer: "Moscú",
        userAnswer: null
    },
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Osaka", "Tokio", "Yokohama"],
        correctAnswer: "Tokio",
        userAnswer: null
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sydney", "Melbourne", "Canberra"],
        correctAnswer: "Canberra",
        userAnswer: null
    }
];
 
// Paso 2: Crear la función isCorrectAnswer
function isCorrectAnswer(question, answer) {
    return answer === question.correctAnswer;
}
 
// Paso 3: Definir la función getUserAnswer
function getUserAnswer(question) {
    let optionsString = question.options.map((option, index) => `${index + 1}. ${option}`).join('\n');
    let userResponse = prompt(`${question.question}\n${optionsString}\nEscribe el número de la opción correcta:`);
    return question.options[parseInt(userResponse) - 1];
}
 
// Paso 4: Crear la función askQuestion
function askQuestion(question) {
    console.log(question.question);
    const userAnswer = getUserAnswer(question);
    question.userAnswer = userAnswer; // Guardar la respuesta del usuario
    if (isCorrectAnswer(question, userAnswer)) {
        console.log("¡Correcto!");
    } else {
        console.log("Incorrecto. La respuesta correcta es " + question.correctAnswer);
    }
}
 
// Paso 5: Realizar las preguntas y contar las respuestas correctas e incorrectas
let correctCount = 0;
let incorrectCount = 0;
let results = [];
 
questions.forEach((question) => {
    askQuestion(question);
    if (isCorrectAnswer(question, question.userAnswer)) {
        correctCount++;
        results.push({ question: question.question, correct: true });
    } else {
        incorrectCount++;
        results.push({ question: question.question, correct: false });
    }
});
 
// Paso 6: Mostrar un resumen final
console.log("\nResumen:");
results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.question} - ${result.correct ? "Correcta" : "Incorrecta"}`);
});
 
console.log(`\nPreguntas correctas: ${correctCount}`);
console.log(`Preguntas incorrectas: ${incorrectCount}`);
 