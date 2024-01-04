'use strict';

// /*Selects the '.message' class of the doducment and logs it to the consol */
// console.log(document.querySelector('.message').textContent);

// /* Selects the ".message" class of the document, modifies the text to 'Correct Number!', then logs it to the console. */
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number!')
// );

// /* Selects '.number' and '.score' classes and sets the text content to 13 and 10 respectively */
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// /* Selects '.guess' class then assigns the value to '23' */
// document.querySelector('.guess').value = 23;

// /* Selects '.guess' class then uses the .value method to be able to specifically get the value from an input field */
// console.log(document.querySelector('.guess').value);

/* Firstly, we select the '.check' class which is on a button, next we use the '.addEventListener' which enables us to pass in a two parameters, the first being a trigger, in this case 'click', the second being a function, known as an event handler, which tells us what to do when this event is triggered. In this case, when the button is clicked, it will log the value of the '.guess' class to the console. Additionally, the value will be converted to a number and then stored in the 'guess' variable so we can later use it to compare to the randomly generated number*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  /* If the '.guess' class is empty, it will return a false because an empty value is falsey, thus it will display the message "no number" */
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ';

    /* Guess is correct, player wins */
    /* if player guesses the right number, a 'correct number' message will display, the background will turn green, the box containing the number will widen */
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    /* Guess is too high */
    /* if the guess is too high, the score will increment down by 1, if score reaches 1 and they guess incorrectly, player loses and message 'you lost' is displayed */
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
    /* Guess is too low */
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
