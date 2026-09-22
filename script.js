document.addEventListener('DOMContentLoaded', () => {
//    const quizContainer = document.querySelector('#quiz-container');
   const questionContainer = documnet.querySelector("#question-container");
   const  questionText = document.querySelector("#question-text");
   const optionList = document.querySelector("#option-list");
   const resultContainer = document.querySelector("#result-container");
   const totalScore = document.querySelector("#total-score");
   const restartButton = document.querySelector("#restart-button");
   const startButton = document.querySelector("#start-button");
   const nextButton = document.querySelector("#next-button");

   const question = [
    {
        question:"What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: ["Charles Dickens","Jane Austen","William Shakespeare","Mark Twain"],
      answer: "William Shakespeare",
    },
   ];

   let currentQuestionIndex = 0; //It's always good to keep the track of each question
   let score = 0;


   
})