const guessedLettersElement = document.querySelector('.guessed-letters');

const guessLetterButton = document.querySelector('.guess');

const letterInput = document.querySelector('.letter');

const wordInProgress = document.querySelector('.word-in-progress');

const remainingGuessesElement = document.querySelector('.remaining');

const remainingGuessesSpan = document.querySelector('.remaining span');

const message = document.querySelector('.message');

const playAgainButton = document.querySelector('.play-again');

const word = 'magnolia';
const guessedLetters = [];

const placeholder = function (word) {
const placeholderLetters = [];
for (const letter of word) {
    console.log(letter);
    placeholderLetters.push('●');
}
wordProgress.innerText = placeholderLetters.join('');
};
placeholder(word);

 

guessLetterButton.addEventListener('click', function (e) {
  e.preventDefault();
  message.innerText = '';
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = '';
});

const validateInput = function (input) {
   const acceptedLetter = /[a-zA-Z]/;
   if (input.length === 0) {
       message.innerText = 'Please enter a letter.';
   } else if (input.length > 1) {
       message.innerText = 'Please enter a single letter.';
   } else if (!input.match(acceptedLetter)) {
       message.innerText = 'Please enter a letter from A-Z.';
   } else {
       return input;
   } 
};
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessed.includes(guess)) {
        message.innerText = 'You already guessed that letter. Try again.';
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
       
    }
};

const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = '';
    for (const letter of guessedLetters) {
        const li = document.createElement('li');
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split('');
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push('●');
        }
    } 
    wordInProgress.innerText = revealWord.join('');
    checkIfWin();
    
};

const updateGuessesRemaining = function (guess) {

    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        message.innerText = `Sorry, the word has no ${guess}.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Good guess! The word has ${guess}.`;
    }
    if (remainingGuesses === 0) {
        message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
        startOver();
    } else if (remainingGuesses === 1) {
        remainingGuessesElement.innerText = `${remainingGuesses} guess`;
    } else {
        remainingGuessesElement.innerText = `${remainingGuesses} guesses`;
    }
};
const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add('win');
        message.innerHTML = `<p class="highlight">You guessed the word! Congrats!</p>`; 
        startOver();
    }
};

const startOver = function () {
    guessLetterButton.classList.add('hide');
    remainingGuessesElement.classList.add('hide');
    guessedLettersElement.classList.add('hide');
    playAgainButton.classList.remove('hide');
};

playAgainButton.addEventListener('click', function () {
    message.classList.remove('win');
    guessedLetters = [];
    remainingGuesses = 8;
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    guessedLettersElement.innerHTML = '';
    message.innerText = '';

    getWord();

    guessLetterButton.classList.remove('hide');
    playAgainButton.classList.add('hide');
    remainingGuessesElement.classList.remove('hide');
    guessedLettersElement.classList.remove('hide');
});




