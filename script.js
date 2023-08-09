const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');

const quizData = [
    { question: 'What is the capital of France?', options: ['Paris', 'Berlin', 'London', 'Madrid'], correct: 'Paris' },
    { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correct: 'Mars' },
    { question: 'What is the largest mammal on Earth?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Rhinoceros'], correct: 'Blue Whale' },
    // Add more questions...
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const question = quizData[index];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, question.correct));
        optionsElement.appendChild(button);
    });

    nextBtn.style.display = 'none';
}

function checkAnswer(selectedOption, correctOption) {
    if (selectedOption === correctOption) {
        event.target.classList.add('correct');
    } else {
        event.target.classList.add('wrong');
    }

    // Disable buttons after user selects an answer
    optionsElement.querySelectorAll('button').forEach(button => {
        button.disabled = true;
    });

    nextBtn.style.display = 'block';
}

function nextQuestion() {
    // Reset button styles and enable buttons
    optionsElement.querySelectorAll('button').forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
    } else {
        questionElement.textContent = 'Quiz completed!';
        optionsElement.innerHTML = '';
        nextBtn.style.display = 'none';
    }
}

showQuestion(currentQuestionIndex);
