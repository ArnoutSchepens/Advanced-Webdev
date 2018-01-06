function specialMultiply(a, b) {
	if (arguments.length === 1) {
		return function(b) {
			return a * b;
		};
	}
	return a * b;
}
console.log(specialMultiply(3, 4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));

function guessingGame(amount) {
	var answer = Math.floor(Math.random() * 11);
	var guesses = 0;
	var completed = false;
	return function(guess) {
		if (!completed) {
			guesses++;
			if (guess === answer) {
				completed = true;
				return "You got it!";
			} else if (guesses === amount) {
				completed = true;
				return "No more guesses. The answer was " + answer;
			} else if (guess > answer) {
				return "Your guess is too high!";
			} else if (guess < answer) {
				return "Your guess is too low!";
			}
		}
		return "You are all done playing";
	};
}

var game1 = guessingGame(5);
console.log(game1(1));
console.log(game1(8));
console.log(game1(5));
console.log(game1(7));
console.log(game1(1));

var game2 = guessingGame(3);
console.log(game2(5));
console.log(game2(3));
console.log(game2(1));
console.log(game2(1));
