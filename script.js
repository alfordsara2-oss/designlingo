// COLOR GAME

let correct = "red";

function check(answer){

let result = document.getElementById("result");

if(answer === correct){
result.innerText = "✅ Correct!";
}else{
result.innerText = "❌ Try again!";
}

}


// QUIZ

function answer(choice){

let output = document.getElementById("quizResult");

if(choice === "a"){
output.innerText = "✅ Correct!";
}else{
output.innerText = "❌ Wrong answer.";
}

}
