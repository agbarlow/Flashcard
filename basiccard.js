// constructor for basic card

var BasicCard = function(front, back, statement) {
	this.newCardsArr = [];
	this.front = front;
	this.back = back;
	this.statement = statement
	
	BasicCard.prototype.addNewCard = function(front, back, statement) {
   this.newCardsArr.push(new BasicCard(front, back, statement));
};
}


/*then in the main you create the card:
var newBasicCard = new BasicCard();
newBasicCard.addNewCard("question text", "answer text");
*/
// export for BasicCard 
module.exports = BasicCard;


//BasicCard.prototype.addNewCard = function(front, back) {

//   this.basicCardsArr.push(new BasicCard(front, back));
//};