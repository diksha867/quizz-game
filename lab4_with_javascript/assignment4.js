// ===============================
// Simple JavaScript Quiz Game
// ===============================

// Array containing questions and answers
const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "delhi"
    },
    {
        question: "Which fruit is the king of fruits?",
        answer: "mango"
    },
    {
        question: "Name the social media platform which name is starts from I?",
        answer: "instagram"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "Who is the current prime minister of india?",
        answer: "narendra modi"
    },
    {
        question: "Which festival is known as the festival of lights?",
        answer: "diwali"
    },
    {
        question: "Which isn the largest planet in our solar system?",
        answer: "jupiter"
    },
    {
        question: "What is the national animal of india?",
        answer: "tiger"
    },
    {
        question: "What is the largest ocean in the world?",
        answer: "pacific ocean"
    },
    {
        question: "Who is known as the father of india?",
        answer: "mahatma gandhi"
    }
];

// Function that runs the quiz
function runQuiz() {

    let score = 0; // Score initialization

    // Loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // Prompt user for answer
        let userAnswer = prompt(quizQuestions[i].question);

        // If user presses Cancel
        if (userAnswer === null) {
            alert("Quiz stopped by user.");
            return;
        }

        // Normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Incorrect! ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // Display final score
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}

// Run the quiz
runQuiz();
