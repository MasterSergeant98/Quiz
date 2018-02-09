function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		//show question;
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i< choices.length; i++) {
			var element =document.getElementById("choice" + i); 
			element.innerHTML = choices[i];
			guess("btn" + i, choices [i]);
		}
	    showProgress();
	}
}
function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
}

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}
function showScores(){ 
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id ='score'> Your score: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}
var questions = [
	new Question("Maximum range of Javelin anti-tank guided missile?", ["600 meters", "1400 meters", "4000 meters", "8000 meters"], "4000 meters"),
	new Question("How many engines does MIG-29 have?", ["1", "2", "4", "8"], "2"),
	new Question("Family of air-defence systems produced in France?", ["Patriot", "Tor", "MEADS", "Aster"], "Aster"),
	new Question("Tonnage of Nimitz class aircraft carrier?", ["20000 tonnes", "45000 tonnes", "80000 tonnes", "100000 tonnes"], "100000 tonnes"),
	new Question("Main armamament caliber of modern Soviet/Russian main battle tanks?", ["75 mm", "105 mm", "125 mm", "140 mm"], "125 mm")
];
var quiz = new Quiz(questions);
populate();

