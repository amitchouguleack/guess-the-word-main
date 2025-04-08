const guessedLetters = document.querySelector('.guessed-letters');

const textGuessButton = document.querySelector('.guess');

const guessLetterInput = document.querySelector('.letter-input');

const wordProgress = document.querySelector('.word-in-progress');

const remainingGuesses = document.querySelector('.remaining');

const remainingGuessesSpan = document.querySelector('.remaining span');

const message = document.querySelector('.message');

const playAgain = document.querySelector('.play-again');

const word = 'magnolia';

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
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = '';
});
