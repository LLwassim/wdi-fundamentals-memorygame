
let cards = 
['Queen','queen','King','king'];
let cardsInPlay = [];
var cardOne = cards[0];
cardsInplay = cards.push(cardOne);
console.log('user flipped ' + cards[0])
var cardTwo = cards[2];
cardsInPlay = cards.push(cardTwo);
console.log('user flipped ' + cards[1]) 
var checkForMatch = function() {
console.log('user flipped ' + cards[2])
if(cardsInPlay[0] === cardsInPlay[1]) { 
	alert('You found a match');
}
 else {
 	alert("Try again");
 }
};