const quizData = [
    {
        question: "What is the primary industry focus of Cognizant?",
        options: ["Manufacturing", "IT", "Construction", "Space"],
        answer: "IT",
    },
    {
        question: " What was Cognizant's approximate annual revenue in 2024?",
        options: ["$19 Billion", "$40 Billion", "$2 Billion", "$29 Billion"],
        answer: "$19 Billion",
    },
    {
        question: "In which year was Cognizant founded?",
        options: [
            "1990",
            "1992",
            "1994",
            "1996",
        ],
        answer: "1994",
    },
    {
        question: "Where is the global headquarters of Cognizant located?",
        options: ["Italy", "France", "India", "USA"],
        answer: "USA",
    },
    {
        question: "Who is the current CEO of Cognizant (as of 2025)?",
        options: ["Ravi Kumar S", "Tom Henry", "Tara Singh", "Sundar Pichai"],
        answer: "Ravi Kumar S",
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

const timerEl = document.getElementById("time");
const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const resultEl = document.querySelector(".result");
const scoreEl = document.getElementById("score");
const restartBtn = document.querySelector(".restart-btn");

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = "";

    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    resultEl.style.display = "block";
    scoreEl.textContent = score;
    restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    timeLeft = 15;
    timerEl.textContent = timeLeft;
    questionEl.style.display = "block";
    optionsEl.style.display = "block";
    resultEl.style.display = "none";
    restartBtn.style.display = "none";
    loadQuestion();
    startTimer();
});

// Initial start
loadQuestion();
startTimer();
