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