const quizData = [
    // Previous questions omitted for brevity

    {
        question: "Which CSS property is used to control the space between the elements inside the border of an element?",
        options: ["margin", "spacing", "padding"],
        answer: "padding"
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: ["p {text-style: bold;}", "p {font-weight: bold;}", "p {style: bold;}"],
        answer: "p {font-weight: bold;}"
    },
    {
        question: "Which CSS property is used to change the size of an element's font?",
        options: ["text-size", "font-size", "size"],
        answer: "font-size"
    },
    {
        question: "How do you make a CSS class called 'example'?",
        options: [".example {}", "#example {}", "class.example {}"],
        answer: ".example {}"
    },
    {
        question: "In CSS, which pseudo-class is used to select elements when they are in a certain state, like when a user hovers over them?",
        options: [":hover", ":active", ":link"],
        answer: ":hover"
    },
    {
        question: "What does the CSS property 'display: none;' do?",
        options: ["Hides the element", "Displays the element as inline", "Displays the element as block"],
        answer: "Hides the element"
    },
    {
        question: "Which CSS property is used for controlling the layout of multiple elements in a row?",
        options: ["flex-direction", "grid-layout", "float"],
        answer: "flex-direction"
    },
    {
        question: "What is the correct CSS syntax to change the background color of an element to blue?",
        options: ["background-color: blue;", "color: blue;", "bg-color: blue;"],
        answer: "background-color: blue;"
    },
    {
        question: "Which CSS property is used to make text italic?",
        options: ["text-style", "font-style", "italic"],
        answer: "font-style"
    },
    {
        question: "How do you group selectors in CSS?",
        options: ["Separate each selector with a comma", "Group them within curly braces", "Use a period before each selector"],
        answer: "Separate each selector with a comma"
    },
    {
        question: "Which CSS property is used to add shadows to text?",
        options: ["text-shadow", "shadow-text", "text-effect"],
        answer: "text-shadow"
    },
    {
        question: "What does the CSS property 'position: relative;' do?",
        options: ["Positions an element relative to its normal position", "Positions an element absolutely within its parent", "Positions an element relative to the viewport"],
        answer: "Positions an element relative to its normal position"
    },
    {
        question: "Which CSS property is used to change the transparency level of an element?",
        options: ["opacity", "transparency", "visibility"],
        answer: "opacity"
    },
    {
        question: "How do you center align text in CSS?",
        options: ["text-align: center;", "align: center;", "center-align: text;"],
        answer: "text-align: center;"
    },
    {
        question: "What is the correct CSS syntax to make the font size of all <h1> elements 24px?",
        options: ["h1 {font-size: 24px;}", "h1 {size: 24px;}", "h1 {text-size: 24px;}"],
        answer: "h1 {font-size: 24px;}"
    }
];

// Additional CSS questions can be added following the same structure

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
