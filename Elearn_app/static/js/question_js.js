const quizData = [
    // Previous questions omitted for brevity

    {
        question: "How do you declare a variable in JavaScript?",
        options: ["let myVar;", "variable myVar;", "var myVar;"],
        answer: "var myVar;"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = 'red', 'green', 'blue';", "var colors = ['red', 'green', 'blue'];", "var colors = {'red', 'green', 'blue'};"],
        answer: "var colors = ['red', 'green', 'blue'];"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if (i == 5)", "if i = 5"],
        answer: "if (i == 5)"
    },
    {
        question: "What is the correct way to write a JavaScript for loop?",
        options: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)"],
        answer: "for (i = 0; i <= 5; i++)"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction();", "myFunction();", "call function myFunction();"],
        answer: "myFunction();"
    },
    {
        question: "What is the correct way to write a JavaScript comment?",
        options: ["<!--This is a comment-->", "//This is a comment", "/*This is a comment*/"],
        answer: "//This is a comment"
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        options: ["while()", "forEach()", "forEachElement()"],
        answer: "forEach()"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        question: "Which function is used to parse a string to an integer in JavaScript?",
        options: ["parseInt()", "stringToInt()", "parseInteger()"],
        answer: "parseInt()"
    },
    {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Returns the type of a variable", "Compares the types of two variables", "Converts a variable to a specified type"],
        answer: "Returns the type of a variable"
    },
    {
        question: "Which JavaScript keyword declares a block scope local variable?",
        options: ["var", "let", "const"],
        answer: "let"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: ["It refers to the current function", "It refers to the global object", "It refers to the current object"],
        answer: "It refers to the current object"
    },
    {
        question: "How do you add a comment in JavaScript that will not be included in the executed code?",
        options: ["<!--This is a comment-->", "//This is a comment", "/*This is a comment*/"],
        answer: "//This is a comment"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "==", ":"],
        answer: "="
    },
    {
        question: "What does the 'NaN' acronym stand for in JavaScript?",
        options: ["Not a Number", "Negative Arithmetic Number", "New Age Number"],
        answer: "Not a Number"
    }
];

// Additional JavaScript questions can be added following the same structure

// Add more questions following the same structure as above


const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        optionsElement.appendChild(button);
        button.addEventListener('click', checkAnswer);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.innerHTML = `<h3>Your Score: ${score} out of ${quizData.length}</h3>`;
    resultsContainer.style.display = 'block';
}

submitButton.addEventListener('click', displayQuestion);

displayQuestion();
