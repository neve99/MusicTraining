function nextQuestion(nextId) {
  // Hide all questions
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => question.classList.remove('active'));


  // Show the next question
  const nextQuestion = document.getElementById(nextId);
  nextQuestion.classList.add('active');
}

function showResults() {
  // Hide all questions
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => question.classList.remove('active'));

  // Show the results
  const results = document.getElementById('results');
  results.classList.add('active');
}

//Play sound
document.querySelectorAll('.play-sound').forEach(button => {
  button.addEventListener('click', function () {
    const soundId = this.getAttribute('data-sound');
    playSound(soundId);
  });
});

function playSound(soundId) {
  const sound = document.getElementById(soundId);
  sound.currentTime = 0; // Rewind to the start
  sound.play();
}

//Wrong button
document.addEventListener('DOMContentLoaded', function () {
  // Select all buttons with the class 'btn-wrong'
  const buttons = document.querySelectorAll('.btn-wrong');

  // Add a click event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      button.style.backgroundColor = 'red';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.padding = '2px 7px';
    });
  });
});

//show answer

const btnCorrect = document.querySelector('.btn-correct');
const showAnswer = document.querySelector('.showAnswer');

document.querySelector('.btn-correct').addEventListener('click', function () {
  showAnswer.style.display = 'block';
});

document.querySelector('.btn-correct-2').addEventListener('click', function () {
  document.querySelector('.showAnswer-2').style.display = 'block';
});

//recording button change
const btnRecord = document.querySelector('.btn-record');
const btnRecognition = document.querySelector('.btn-recognition');
document.querySelector('.btn-record').addEventListener('click', function () {

  btnRecord.classList.toggle('btn-stop');
  btnRecognition.style.display = 'block';


  if (btnRecord.textContent === 'Record') {
    btnRecord.textContent = 'Stop';
  } else {
    btnRecord.textContent = 'Record';
  }

});
