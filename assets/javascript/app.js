$(document).ready(function () {
	var options = [
		{
			question: `"Star Trek, The Next Generation", takes us 99 years into the future after the original "Star Trek" television series finished. Who was in the captain's chair for this second series of the "Star Trek" franchise?`, 
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
			question: "Who is the cheif engineer of the USS Enterprise?", 
			choice: ["Giordi La Forge", "Montgomery Scott", "Miles O'Brien", "Paul Stamets" ],
			answer: 0,
			photo: "./assets/images/giordi.gif"
		}, 
		{
			question: `Jean-Luc Picard referred to which godlike character when he said this ""He's devious and amoral and unreliable and irresponsible and... and definitely not to be trusted."`,
			choice: ["Doctor Who", "Zeus", "Riker", "Q" ],
			answer: 3,
			photo: "./assets/images/q.gif"
		}];
		