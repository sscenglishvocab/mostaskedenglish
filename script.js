const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');

const vocabularyQuestions = [
    { question: 'Abate', options: ['Decrease', 'Increase', 'Maintain', 'Estimate'], correct: 'Decrease' },
    { question: 'Benevolent', options: ['Malevolent', 'Friendly', 'Hostile', 'Unkind'], correct: 'Friendly' },
    { question: 'Cacophony', options: ['Harmony', 'Melody', 'Music', 'Noise'], correct: 'Noise' },
    // Add more questions...
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const question = vocabularyQuestions[index];
    questionElement.textContent = `Choose the correct meaning for: ${question.question}`;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, question.correct));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctOption) {
    if (selectedOption === correctOption) {
        alert('Correct!');
    } else {
        alert(`Wrong! The correct answer is: ${correctOption}`);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < vocabularyQuestions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('Quiz completed!');
        currentQuestionIndex = 0;
        showQuestion(currentQuestionIndex);
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < vocabularyQuestions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('Quiz completed!');
        currentQuestionIndex = 0;
        showQuestion(currentQuestionIndex);
    }
});

showQuestion(currentQuestionIndex);
