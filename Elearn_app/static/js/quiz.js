const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML element is used to define a hyperlink?",
        options: ["<a>", "<link>", "<href>"],
        answer: "<a>"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["title", "alt", "src"],
        answer: "alt"
    },
    {
        question: "What is the correct HTML for creating a checkbox?",
        options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>"],
        answer: "<input type='checkbox'>"
    },
    {
        question: "Which tag is used to define an unordered list?",
        options: ["<ul>", "<list>", "<ol>"],
        answer: "<ul>"
    },
    {
        question: "How can you make a numbered list?",
        options: ["<ol>", "<list>", "<ul>"],
        answer: "<ol>"
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: ["<td>", "<tr>", "<table>"],
        answer: "<tr>"
    },
    {
        question: "What does CSS stand for?",
        options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["In the <head> section", "In the <body> section", "At the end of the document"],
        answer: "In the <head> section"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color"],
        answer: "color"
    },
    {
        question: "How do you insert a comment in a CSS file?",
        options: ["'This is a comment'", "/* This is a comment */", "// This is a comment //"],
        answer: "/* This is a comment */"
    },
    {
        question: "Which property is used to change the left margin of an element?",
        options: ["margin-left", "padding-left", "indent"],
        answer: "margin-left"
    },
    {
        question: "What does the 'justify-content' property do in CSS?",
        options: ["Aligns the content vertically", "Aligns the content horizontally", "Justifies the text in the container"],
        answer: "Aligns the content horizontally"
    },
    {
        question: "How do you select an element with id 'demo' in CSS?",
        options: ["#demo", ".demo", "demo"],
        answer: "#demo"
    },
    {
        question: "Which CSS property is used to make a dropdown menu?",
        options: ["dropdown", "menu-style", "display"],
        answer: "display"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: ["var colors = 'red', 'green', 'blue';", "var colors = ['red', 'green', 'blue'];", "var colors = {'red', 'green', 'blue'};"],
        answer: "var colors = ['red', 'green', 'blue'];"
    }
];

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
