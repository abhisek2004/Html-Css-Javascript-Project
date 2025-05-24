const question = [
{
    question:"Which is the largest animal in the Earth?",
    answer:[
        {text:"Shark" , correct:false},
        {text:"Blue Whale" , correct:true},
        {text:"cat" , correct:false},
        {text:"Giraffe" , correct:false},
    ]
},
{
    question:"Which is the smallest country in the world?",
    answer:[
        {text:"vatican city" , correct:true},
        {text:"china" , correct:false},
        {text:"nepal" , correct:false},
        {text:"Bhutan" , correct:false},
    ]
},
{
    question:"Which is the largest Desert in the World?",
    answer:[
        {text:"Kalhari Desert" , correct:false},
        {text:"Gobi Desert" , correct:false},
        {text:"Sahara Desert" , correct:false},
        {text:"Antarctic Desert" , correct:true},
    ]
},
{
    question:"Which is the smallest continent in the world?",
    answer:[
        {text:"Asia" , correct:false},
        {text:"Arctic" , correct:true},
        {text:"Australia" , correct:true},
        {text:"Africa" , correct:false},
    ]
},
{
    question:"Which is the Full form of HTML?",
    answer:[
        {text:"HYPER TEXT MALE LANGUAGE" , correct:false},
        {text:"HYPER TEXT MARKUP LANGUAGE" , correct:true},
        {text:"HYPER TEXT MAKEUP LANGUAGE" , correct:false},
        {text:"HYPER TONE MARKUP LANGUAGE" , correct:false},
    ]
},
{
    question:"Which of the following is correct about JavaScript?",
    answer:[
        {text:"JavaScript is Assembly-language" , correct:false},
        {text:"JavaScript is an Object-Based language" , correct:true},
        {text:"JavaScript is an Object-Oriented language" , correct:false},
        {text:"JavaScript is a High-level language" , correct:false},
    ]
},
];

const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-button");
const nextButton= document.getElementById ("next-button"); 
 
let currentQuestionIndex = 0;
let score= 0;
function startquiz(){
    currentQuestionIndex = 0;
     score= 0;
     nextButton.innerHTML="Next";
     showQuestion();
}
function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question; 

    currentQuestion.answer.forEach(answer=>{
        const button =  Document.createElement("button");
        button.innerHTML=answer.text;
        button.classlist.add("btn");
        answerButton.appendChild(button); 
    });

}
startquiz();
