$(document).ready(function () {
	var options = [
		{
			question: `Who was in the captain's chair in "Star Trek, The Next Generation"?`, 
			choice: ["Benjamin Sisko", "Kathryn Janeway", "Jonathan Archer", "Jean-Luc Picard"],
			answer: 3,
			photo: "./assets/images/picard.gif"
		 },
		 {
			question: "What is Captain Picard's preferred beverage of choice?", 
			choice: ["Saurian Brandy", "Aldeberan Whiskey", "Romulan Ale", "Tea, Earl Grey (Hot)"],
			answer: 3,
			photo: "./assets/images/tea.gif"
		 }, 
		 {
			question: `Out of these major character's from the original "Star Trek", which one never appeard until "Star Trek, The Next Generation" made the jump to the big screen?`, 
			choice: ["Captain James T. Kirk", "Commander Spock", `Lieutenant Commander Montgomery "Scotty" Scott`, `Dr. Leonard "Bones" McCoy` ],
			answer: 0,
			photo: "assets/images/kirk.gif"
		}, 
		{
			question: "What was the hull designation of the starship Enterprise in the Next Generation TV series", 
			choice: ["NCC-1701-C", "NCC-1701-D", "USS-1776", "THX-1138"],
			answer: 1,
			photo: "./assets/images/enterprise.gif"
		}, 
		{
			question: `Guinan, the mysterious and wise bartender, who ran the lounge on the Enterprise was played by which actress?`, 
			choice: ["Alfre Woodard", "Gates McFadden", "Whoopi Goldberg", "Nichelle Nichols" ],
			answer: 2,
			photo: "./assets/images/guinan.gif"
		}, 
		{
			question: "Who is the chief engineer of the USS Enterprise?", 
			choice: ["Giordi La Forge", "Montgomery Scott", "Miles O'Brien", "Paul Stamets" ],
			answer: 0,
			photo: "./assets/images/giordi.gif"
		}, 
		{
			question: `Jean-Luc Picard referred to which godlike character when he said this "He's devious and amoral and unreliable and irresponsible and... and definitely not to be trusted."`,
			choice: ["Doctor Who", "Zeus", "Riker", "Q" ],
			answer: 3,
			photo: "./assets/images/007.gif"
		},];
		var correctCount = 0;
		var incorrectCount = 0;
		var unansweredCount = 0;
		var timer = 20;
		var intervalValue;
		var userGuess ="";
		var running = false;
		var questionCount = options.length;
		var pick;
		var index;
		var newArray = [];
		var holder = [];
		$("#reset").hide();
		//click start button to start game
		$("#start").on("click", function () {
			
				$("#start").hide();
				displayQuestion();
				runTimer();
				for(var i = 0; i < options.length; i++) {
			holder.push(options[i]);
		}
			})
		//timer start
		function runTimer(){
			if (!running) {
			intervalValue = setInterval(decrement, 1000); 
			running = true;
			}
		}
		//timer countdown
		function decrement() {
			timer --;
			$("#timer").html("<h3>Seconds Remaining:"+timer+"</h3>");
			
		
			//stop timer if reach 0
			if (timer === 0) {
				unansweredCount++;
				stop();
				$("#answersGoHere").html("<h3>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</h3>");
				hidepicture();
			}	
		}
		
		//timer stop
		function stop() {
			running = false;
			clearInterval(intervalValue);
		}
		//randomly pick question in array if not already shown  {{{{THIS WAS Really hard to do }}}}
		//below displays a question and lower down answers
		function displayQuestion() {
			//generate random index in array
			index = Math.floor(Math.random()*options.length);
			pick = options[index];
		
		
				$("#questionsGoHere").html("<h2>" + pick.question + "</h2>");
				for(var i = 0; i < pick.choice.length; i++) {
					var userChoice = $("<div>");
					userChoice.addClass("answerchoice");
					userChoice.html("<h2>" +pick.choice[i]+ "</h2>");
					//assign array position to it so can check answer ----this is important
					userChoice.attr("data-guessvalue", i);
					$("#answersGoHere").append(userChoice);
	
		}
		
		
		
		//click function to select answer and outcomes
		$(".answerchoice").on("click", function () {
			//grab array position from userGuess
			userGuess = parseInt($(this).attr("data-guessvalue"));
		
			//checks if user got the correct answer and adds to the correctCount
			if (userGuess === pick.answer) {
				stop();
				correctCount++;
				userGuess="";
				$("#answersGoHere").html("<h3>Correct!</h3>");
				hidepicture();
		//checks if user got the wrong answer and adds to the incorrectCount 
			} else {
				stop();
				incorrectCount++;
				userGuess="";
				$("#answersGoHere").html(`<h3>Incorrect! "resistance is futile" The correct answer is: ` +pick.choice[pick.answer]+ `</h3>`);
				hidepicture();
			}
		})
		}
		function hidepicture () {//shows a picture. notice how I sized it here because changing it in css was not working
			$("#answersGoHere").append(`<br><img height="200px" src=` + pick.photo + `>`);
			newArray.push(pick);
			options.splice(index,1);
			 
			setTimeout(function() {
				$("#answersGoHere").empty();
				timer= 20;
		
			//run the score screen if all questions answered
			if ((incorrectCount + correctCount + unansweredCount) === questionCount) {
				$("#questionsGoHere").empty();
				$("#questionsGoHere").html("<h3>Game Over!  Here's how you did: </h3>");
				$("#answersGoHere").append("<h4> Correct: " + correctCount + "</h4>" );
				$("#answersGoHere").append("<h4> Incorrect: " + incorrectCount + "</h4>" );
				$("#answersGoHere").append("<h4> Unanswered: " + unansweredCount + "</h4>" );
				
				$("#reset").show();
				correctCount = 0;
				incorrectCount = 0;
				unansweredCount = 0;
		
			} else {
				runTimer();
				displayQuestion();
				$("#timer").html("<h3>Seconds Remaining: 20</h3>");	
			}  //  above: shows 20 seconds instead of 19 when starting the count
			//below: is the time between questions.
			}, 3500);
				
		
		}	
		
		$("#reset").on("click", function() {
			$("#reset").hide();
			$("#answersGoHere").empty();
			$("#questionsGoHere").empty();
			$("#timer").html("<h3>Seconds Remaining: 20</h3>");
			for(var i = 0; i < holder.length; i++) {
				options.push(holder[i]);
			}
			runTimer();
			displayQuestion();
		
		})
		
		})	
		
