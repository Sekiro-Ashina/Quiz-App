# Quiz App

A lightweight, browser-based multiple-choice quiz built with plain HTML, CSS, and JavaScript. It includes three general-knowledge questions, tracks the score, and lets players restart when the quiz ends.

## Features

- Start, progress through, and restart a quiz
- Four answer choices per question
- Running score calculation
- Dark, responsive-centered interface
- No dependencies or build step

## Run locally

1. Clone or download this project.
2. Open `index.html` in a modern web browser.
3. Select **Start Quiz** and choose an answer for each question.

You can also serve the folder through any static-file server if preferred.

## Project structure

```text
.
├── index.html  # Page structure
├── style.css   # Quiz interface styles
└── script.js   # Questions, quiz flow, and scoring logic
```

## Customize questions

Update the `questions` array in `script.js`. Each entry needs a question, an array of options, and the matching answer:

```js
{
  question: "What is the capital of France?",
  options: ["Paris", "London", "Berlin", "Madrid"],
  answer: "Paris"
}
```

The `answer` value must exactly match one item in `options`.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
