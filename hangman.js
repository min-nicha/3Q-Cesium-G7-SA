// Declaration of arrays and variables

const randomWords = ['anvil', 'about', 'brick', 'birds', 'carts', 'carbs', 'decks', 'dream', 'early', 'egypt', 'fraud', 'final', 'grind', 'grade', 'hoard', 'hinge', 'infer', 'itchy', 'jolts', 'joker', 'knobs', 'knife', 'libra', 'laced', 'money', 'mural', 'newts', 'nymph', 'olive', 'oaten', 'pixel', 'prism', 'quark', 'quite', 'range', 'route', 'siren', 'stink', 'tardy', 'twerp', 'under', 'urban', 'virgo', 'vixen', 'watch', 'white', 'yacht', 'yodel', 'zesty', 'zebra'];
let guessedLetters = [];
let randomWord = randomWords[Math.trunc((Math.random() * 50) + 1)];
var remainingLetters = randomWord.length;
var chances = 5;

// Displaying hangman graphics

function hangmanGraphic() {
    if (chances === 4) {
        document.getElementById('head').style.display = 'block';
    } else if (chances === 3) {
        document.getElementById('body').style.display = 'block';
    } else if (chances === 2) {
        document.getElementById('left-arm').style.display = 'block';
    } else if (chances === 1) {
        document.getElementById('right-arm').style.display = 'block';
    } else if (chances === 0) {
        document.getElementById('legs').style.display = 'block';
    }
}

// Checking letters

function coolGame() {
	let userGuess = (prompt('Enter a letter (lowercase): '));

	if(userGuess == null){
		alert('Why don\'t you try my game? :(');
		document.getElementById('hints').innerHTML = 'Enter a letter!';
	}
	else if (userGuess == ''){
		alert('Oh you didn\'t enter anything :(');
		document.getElementById('hints').innerHTML = 'Try again.';
	}
	else if(userGuess.length !== 1){
		alert('Please enter one letter only!');
		document.getElementById('hints').innerHTML = 'Try again.';
	}
	else if (guessedLetters.includes(userGuess)){
		chances--;
		document.getElementById('hints').innerHTML = 'You already used that letter! D:';
		document.getElementById('lives').innerHTML = chances;
		hangmanGraphic(chances);
	}
	
	// Adding correct guesses to another array that will display guessed letters
	
	else if (randomWord.includes(userGuess)){
		if (randomWord[0] === userGuess){
			guessedLetters[0] = userGuess;
			remainingLetters--;
			document.getElementById('hints').innerHTML = 'Getting there!';
			document.getElementById('lives').innerHTML = chances;
			document.getElementById('letter1').innerHTML = userGuess;
		}
		if (randomWord[1] === userGuess){
			guessedLetters[1] = userGuess;
			remainingLetters--;
			document.getElementById('hints').innerHTML = 'Getting there!';
			document.getElementById('lives').innerHTML = chances;
			document.getElementById('letter2').innerHTML = userGuess;
		}
		if (randomWord[2] === userGuess){
			guessedLetters[2] = userGuess;
			remainingLetters--;
			document.getElementById('hints').innerHTML = 'Getting there!';
			document.getElementById('lives').innerHTML = chances;
			document.getElementById('letter3').innerHTML = userGuess;
		}
		if (randomWord[3] === userGuess){
			guessedLetters[3] = userGuess;
			remainingLetters--;
			document.getElementById('hints').innerHTML = 'Getting there!';
			document.getElementById('lives').innerHTML = chances;
			document.getElementById('letter4').innerHTML = userGuess;
		}
		if (randomWord[4] === userGuess){
			guessedLetters[4] = userGuess;
			remainingLetters--;
			document.getElementById('hints').innerHTML = 'Getting there!';
			document.getElementById('lives').innerHTML = chances;
			document.getElementById('letter5').innerHTML = userGuess;
		}
	}
	else {
		chances--;
		document.getElementById('hints').innerHTML = 'Try again.';
		document.getElementById('lives').innerHTML = chances;
		hangmanGraphic(chances);
	}
	
	// Victory
	
    if (remainingLetters === 0) {
        document.getElementById('hints').innerHTML = 'Yay you guessed it!!! Refresh to play again thanks!!!';
        document.getElementById('button').style.display = 'none';
		yayConfetti();
    }
	
	// Defeat

    if (chances === 0) {
		document.getElementById('hints').innerHTML = 'Oh !! u lose LOL !! The word was: ' + randomWord + '!! Refresh to play again!!';
        document.getElementById('button').style.display = 'none';
    }
}

// Yay confetti!

function yayConfetti() {
	const duration = 15 * 1000,
		animationEnd = Date.now() + duration,
		defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

	function randomInRange(min, max) {
	  return Math.random() * (max - min) + min;
	}

	const interval = setInterval(function() {
	  const timeLeft = animationEnd - Date.now();

	  if (timeLeft <= 0) {
		return clearInterval(interval);
	  }

	  const particleCount = 50 * (timeLeft / duration);

	  confetti(
		Object.assign({}, defaults, {
		  particleCount,
		  origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
		})
	  );
	  confetti(
		Object.assign({}, defaults, {
		  particleCount,
		  origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
		})
	  );
	}, 250);
}