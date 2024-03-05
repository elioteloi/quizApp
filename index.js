const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Cell Membrane"],
    answer: "Mitochondria",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Leo Tolstoy",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "N2"],
    answer: "H2O",
  },
];

const div = document.getElementById("div");

quizQuestions.forEach((element) => {
  const elementQuestions = document.createElement("h1");
  elementQuestions.innerHTML = element.question;
  div.appendChild(elementQuestions);
  element.options.forEach((elementOption) => {
    const checkbox = document.createElement("input");
    checkbox.type = "radio";
    checkbox.value = elementOption;

    checkbox.addEventListener("click", () => {
      const correctAnswere = document.createElement("h1");
      const incorrectAnswer = document.createElement("h1");
      console.log(checkbox.value);
      if (checkbox.value === element.answer) {
        correctAnswere.innerHTML = "yes";
        div.appendChild(correctAnswere);
      } else {
        incorrectAnswer.innerHTML = "no";
        div.appendChild(incorrectAnswer);
      }
    });

    const label = document.createElement("label");

    div.appendChild(checkbox);
    div.appendChild(label);
    label.innerHTML = elementOption;
  });
});
