const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
    answer: [
      "Central Processing Unit",
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    answer: ["Final", "Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answer: ["False", "True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answer: ["False", "True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    answer: [".svg", ".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
    answer: [
      "Cascading Style Sheet",
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    answer: ["Nougat", "Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    answer: ["140", "120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    answer: ["False", "True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    answer: ["Java", "Python", "C", "Jakarta"],
  },
];
let questionCounter = 0;
let score = 0;
let avaibleQuestions = [];
const questionTitle = document.getElementById("main-question");
const par = Array.from(document.getElementsByClassName("cards-text"));
const button = document.getElementById("button");
const div = Array.from(document.getElementsByClassName("cards"));

const preventDefaultButton = document.getElementById("form");
preventDefaultButton.addEventListener("click", (e) => {
  e.preventDefault();
});

const startTest = () => {
  questionCounter = 0;
  score = 0;
  avaibleQuestions = [...questions];
  questionTitle.innerText = questions[0].question;
  // questions.splice(0, 1);
};

startTest();

const newQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  questionTitle.innerText = questions[randomIndex].question;
  arrayNumbers = [];

  for (let i = 0; i < div.length; i++) {
    div[i].style.display = "inline-block";
  }

  while (arrayNumbers.length < 4) {
    const parIndex = Math.floor(Math.random() * 4);
    if (arrayNumbers.indexOf(parIndex) === -1) {
      arrayNumbers.push(parIndex);
    }
    for (let i = 0; i < questions[randomIndex].answer.length; i++) {
      for (let j = 0; j < arrayNumbers.length; j++) {
        for (k = 0; k < par.length; k++) {
          if (i === arrayNumbers[j] && j === k) {
            par[k].innerText = questions[randomIndex].answer[i];
          }
        }
      }
    }
  }
  if (questions[randomIndex].type === "boolean") {
    par[0].innerText = "True";
    par[1].innerText = "False";
    div[2].style.display = "none";
    div[3].style.display = "none";
  }
  console.log(randomIndex);
  console.log(par);
  questions.splice(randomIndex, 1);

  console.log(questions);
  console.log(arrayNumbers);
};

button.addEventListener("click", newQuestion);
