document.addEventListener('DOMContentLoaded', () => {
//    const quizContainer = document.querySelector('#quiz-container');
   const questionContainer = document.querySelector("#question-container");
   const  questionText = document.querySelector("#question-text");
   const optionList = document.querySelector("#option-list");
   const resultContainer = document.querySelector("#result-container");
   const totalScore = document.querySelector("#total-score");
   const restartButton = document.querySelector("#restart-button");
   const startButton = document.querySelector("#start-button");
   const nextButton = document.querySelector("#next-button");

   const questions = [
    {
        question:"What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens","Jane Austen","William Shakespeare","Mark Twain"],
      answer: "William Shakespeare",
    },
   ];

   let currentQuestionIndex = 0; //It's always good to keep the track of each question
   let score = 0;


   startButton.addEventListener('click', startQuiz); //don't do startQuiz() cause it will immediately run the function we are passing the reference so when someone click only then it run. explain?

   function startQuiz(currentQuestionIndex){
    questionContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    startButton.classList.add("hidden");
    showQuestion();
   }

   function showQuestion(){
    questionText.textContent = questions[currentQuestionIndex].question;
    optionList.innerHTML = ""; //if you don't do this then prev list will also be visible.
    questions[currentQuestionIndex].options.forEach(element =>{ 
      const listItem = document.createElement('li');
        listItem.innerHTML = `${element}`; //don't use element.option as element itself is each value looping through the option array.
        optionList.appendChild(listItem);
        // nextButton.classList.remove('hidden');

        listItem.addEventListener('click', () => checkAnswer(element)); //if you use checkAnswer(element) it will immediately execute that, we want it to execute only when someone clicks on it. So in that case use call back. explain.
    })
   }

   function checkAnswer(element){
    const answer = questions[currentQuestionIndex].answer;
    if(element === answer){
      score++;
    } 
    nextButton.classList.remove("hidden");
  }

  //once the first Question is showed will move to next
  nextButton.addEventListener('click', nextQuestion);

  function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    }
    else{
      showResult();
    }
  }

  function showResult(){
    nextButton.classList.add('hidden');
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    totalScore.textContent = `Total-Score = ${score}`;
  }

  restartButton.addEventListener('click', restartQuiz);
  function restartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    startQuiz();
  }
})
