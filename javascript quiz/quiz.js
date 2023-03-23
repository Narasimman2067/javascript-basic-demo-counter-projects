var quizData = [
  {
    question: "css stands for ?",

    a: "cascading style state",
    b: "cascading style sheet",
    c: "cascading sheet of style",
    d: "none",
    correct: "b",
  },
  {
    question: "which one is not a programming language ?",
    a: "HTML",
    b: "python",
    c: "java",
    d: "none",
    correct: "a",
  },
  {
    question: "which are not frameworks ?",
    a: "react.js",
    b: "django.js",
    c: "bootstrap",
    d: "none",
    correct: "c",
  }
];
// define each element to get into the input field 
var quizdiv = document.getElementById("quizdiv");
var question = document.getElementById("question");
var answer = document.querySelectorAll(".answer");
var option_a = document.getElementById("a_value");
var  option_b = document.getElementById("b_value");
var option_c= document.getElementById("c_value");
var  option_d= document.getElementById("d_value");
var submitbtn = document.getElementById("submit");

// define variable name to start the operation
var currentQuestion = 0;
var quizScore = 0;

// initiate the function of loadQuiz
loadQuiz()
function loadQuiz() {
    // deselect function to intimate that to not select for new question
  deSelect();
  question.innerHTML = quizData[currentQuestion].question;
  option_a.innerText = quizData[currentQuestion].a;
  option_b.innerText = quizData[currentQuestion].b;
  option_c.innerText = quizData[currentQuestion].c;
  option_d.innerText = quizData[currentQuestion].d;
}

function deSelect() {
  answer.forEach((answer) => answer.checked = false);
}
// submit operation start when click a new event triggered
submitbtn.addEventListener("click",()=>{
var selectedoption;
answer.forEach(answer=>{
    if(answer.checked)
    {
        selectedoption=answer.id
    }
    
})
// the selected option is correct then add the score
if(selectedoption==quizData[currentQuestion].correct)
{
    quizScore=quizScore+1

}
// or if not correct then skip to next question
currentQuestion=currentQuestion+1
// the currentquestion is equal to length of data then display the score
if(currentQuestion==quizData.length){

document.getElementById("quizdiv").innerHTML=`<h1>your quizdata score is  ${quizScore} out of ${quizData.length}</h1>`
} 
// if not equal to question length then skip  to next questiion
else{
loadQuiz()
}
})




