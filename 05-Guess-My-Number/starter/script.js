'use strict';

/*
// DOM manipulation - document object model
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `Correct Number! 🚫🧢`;
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; 
*/

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //remember 0 is a falsy value
    displayMessage('🤡 No number!');
  } else if (guess === number) {
    displayMessage('🚫🧢 You got it');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }

    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '🥱 Too high ' : '🤠 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤧 You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  //reset the score to 20
  document.querySelector('.score').textContent = score;

  //reset value of number variable
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  //reset initial condition of message
  displayMessage('Start guessing ...');

  //initial background colour
  document.querySelector('body').style.backgroundColor = '#222';

  //reset guess value
  document.querySelector('.guess').value = '';
});
