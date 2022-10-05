const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.querySelector("#quiz");
// const answerEls;
// const questionEl;
// const a_text;
// const b_text;
// const c_text;
// const d_text;
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const quiz_header = document.createElement("div");
    quiz_header.classList.add("quiz_header");
    quiz.appendChild(quiz_header);

    const question = document.createElement("h2");
    question.setAttribute("id", "question");
    question.innerText = quizData[0].question;
    quiz_header.appendChild(question);

    const ul = document.createElement("ul");
    quiz_header.appendChild(ul);

    for (let i=0; i<4; i++){
        const options = ["a", "b", "c", "d"];
        const options_id = ["a_text", "b_text", "c_text", "d_text"];

        const li = document.createElement("li");
        ul.appendChild(li);
        const input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "answer");
        input.setAttribute("class", "answer");
        input.setAttribute("id", options[i]);
        li.appendChild(input);

        const label = document.createElement("label");
        label.setAttribute("for", options[i])
        label.setAttribute("id", options_id[i])
        label.innerText = quizData[0][options[i]];
        li.appendChild(label);
    }

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("id", "submit");
    submitBtn.innerText = "Submit"
    quiz.appendChild(submitBtn);
}

function deselectAnswers() {
}

function getSelected() {
    
}

// submitBtn.addEventListener('click', () => {
    
// })