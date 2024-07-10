const quizData = [
    {
        "question": "How do you declare a variable in Python?",
        "options": ["variable myVar;", "let myVar;", "myVar = 5"],
        "answer": "myVar = 5"
    },
    {
        "question": "What is the correct way to write a Python list?",
        "options": ["list colors = ['red', 'green', 'blue'];", "colors = 'red', 'green', 'blue';", "colors = ['red', 'green', 'blue']"],
        "answer": "colors = ['red', 'green', 'blue']"
    },
    {
        "question": "How do you write an IF statement in Python?",
        "options": ["if i == 5:", "if (i = 5)", "if i = 5:"],
        "answer": "if i == 5:"
    },
    {
        "question": "What is the correct way to write a Python for loop?",
        "options": ["for i <= 5:", "for i in range(6):", "for (i = 0; i <= 5):"],
        "answer": "for i in range(6):"
    },
    {
        "question": "How do you define a function named 'myFunction' in Python?",
        "options": ["call myFunction():", "def myFunction():", "function myFunction():"],
        "answer": "def myFunction():"
    },
    {
        "question": "What is the correct way to write a Python comment?",
        "options": ["<!--This is a comment-->", "//This is a comment", "#This is a comment"],
        "answer": "#This is a comment"
    },
    {
        "question": "Which Python function is used to iterate over a sequence?",
        "options": ["while()", "for_each()", "for item in sequence:"],
        "answer": "for item in sequence:"
    },
    {
        "question": "How do you round the number 7.25 to the nearest integer in Python?",
        "options": ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)"],
        "answer": "round(7.25)"
    },
    {
        "question": "Which function is used to convert a string to an integer in Python?",
        "options": ["parseInt()", "int()", "stringToInt()"],
        "answer": "int()"
    },
    {
        "question": "What does the 'type()' function do in Python?",
        "options": ["Returns the type of a variable", "Compares the types of two variables", "Converts a variable to a specified type"],
        "answer": "Returns the type of a variable"
    },
    {
        "question": "Which Python keyword declares a variable with a local scope?",
        "options": ["var", "let", "local"],
        "answer": "local"
    },
    {
        "question": "What does the 'self' keyword refer to in Python?",
        "options": ["It refers to the current function", "It refers to the global object", "It refers to the current instance of a class"],
        "answer": "It refers to the current instance of a class"
    },
    {
        "question": "How do you add a comment in Python that will not be included in the executed code?",
        "options": ["<!--This is a comment-->", "//This is a comment", "#This is a comment"],
        "answer": "#This is a comment"
    },
    {
        "question": "Which operator is used to assign a value to a variable in Python?",
        "options": ["=", "==", ":"],
        "answer": "="
    },
    {
        "question": "What does the 'None' keyword represent in Python?",
        "options": ["Not a Number", "Negative Arithmetic Number", "Null or absence of value"],
        "answer": "Null or absence of value"
    }
]

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
