var BasicCard = require("./basiccard.js");
var FlashCard = require("./flashcard.js");
var inquirer = require("inquirer");
var newBCard = new BasicCard();
//var flashcardgame = new FlashCard("one");



function addCard () {
 inquirer.prompt([
{
	type: 'input',
	name: 'front',
	message: 'Enter the Question',
},
{
	type: 'input',
	name: 'back',
	message: 'Enter the Answer',
},
]).then(function(user) {
if ((user.front.search(user.back)) === -1) {
 

newBCard.addNewCard(user.front, user.back, null);
//console.log(newBCard.newCardsArr[0].front);
//console.log(newBCard.newCardsArr[0].back);
//console.log(newBCard.newCardsArr[0].statement);


inquirer.prompt([
{
	type: 'list',
	name: 'another',
	message: 'Do you want to add another card?',
	choices: ['Yes','No'],
}
  ])
  .then(function(user){
  if (user.another === "Yes") addCard()
  else playGame();

});

}
else {
// Take User input and makes it into a Cloze

var newFront = user.front.replace(user.back, "...");
//console.log(newFront);
newBCard.addNewCard(newFront, user.back, user.front);

//console.log (newBCard.newCardsArr[1].front);
//console.log (newBCard.newCardsArr[1].back);
//console.log (newBCard.newCardsArr[1].statement);
//console.log (newBCard.newCardsArr.length);
inquirer.prompt([
{
	type: 'list',
	name: 'another',
	message: 'Do you want to add another card?',
	choices: ['Yes','No'],
}
  ])
  .then(function(user){
  if (user.another === "Yes") addCard()
  else playGame();

});
// Cloze Card Logic


}
});
}


//end of new card  
var score = 0
var b = newBCard.newCardsArr.length;

function playGame () {

for (var i=0; i<newBCard.newCardsArr.length; x=0) {
console.log(newBCard.newCardsArr.length);

inquirer.prompt([{
	type: 'input',
	name: 'answer',
	message: newBCard.newCardsArr[i].front,
}])
.then(function(user) {
	if (newBCard.newCardsArr[i].back.toLowerCase() === user.answer.toLowerCase()) {
	console.log('You are Right!')
	score++;
	i++;
	} else {
	i++;
	console.log("I'm sorry; that's not correct");
	console.log("The correct answer is " + newBCard.newCardsArr[i].back); 
	if (newBCard.newCardsArr[i].statement != null) console.log (newBCard.newCardsArr[i].statement);
	}
		
	});
console.log("Your final score is: " + score);
inquirer.prompt([
{	type:"list",
	name:"playagain",
	message:"Do you want to play again?",
	choices: ['Yes','No'],
}
])
.then(function(user) {
if (user.playagain === "Yes") addCard()
else console.log("Thanks for playing!");
});
}
}







		



//Beginning Step to decide what user wants to do


inquirer.prompt([

 {
    type: 'list',
    name: 'activity',
    message: "What do you want to do?",
    choices: ["Create Card", "Play Game"]
  }
  ]).then(function(user) {
  if (user.activity === "Play Game") console.log("Yes")
  else addCard()
 });  




