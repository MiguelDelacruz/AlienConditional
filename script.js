// Aliens are invading! There are blue, green, and red aliens.

// The total amount of aliens there are is 10,000.

// Create variables with this information, and set up a series of conditional statements such that:

// First, check if there are 10,000 aliens. Then, if there are more than 5,000 green aliens, console.log "MOTHER OF GOD, not the green ones"

// If there are more than a total of 8,000 green and red aliens combined, console.log "DOOOOOM"

// If there are not more than 3000 red and blue aliens combined, console.log

// "We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!"

// You may assign the alien amounts yourself, but the total must add up to ten thousand!
// Add Comment Collapse



var total = 10000;

var r = 2000

var g = 7000

var b = 1000


function aliens(total) {
	if  ( r + g + b == 10000){
		return "true"
	}
	else if ( g > 5000){
		return "MOTHER OF GOD, not the green ones";
	}
	else if (g + r > 8000) {
		return "DOOOOOM";
	}
	else  if (r + b < 3000) {
		return "We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE";	
	}
	else {
		return output = "set a amount of aliens";
	}
}
var output = aliens(total);
console.log(output);

function aliens(total) {
	if (g > 5000) {
		
	}
}