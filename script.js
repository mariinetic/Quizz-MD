// Variáveis que vão ser usadas
let correctAnswersCount = 0;
let questionIndex = 0;

// Função para começar o meu quiz
function startQuiz() {
  document.getElementById('generateBtn').addEventListener('click', showQuestion);
}

// Aqui passa as perguntas
function showQuestion() {
  if (questionIndex >= questions.length) {
    displayFinalMessage();
    return;
  }

  const { question, options, answer } = questions[questionIndex];

  document.getElementById('questionContainer').innerText = question;

  const optionsContainer = document.createElement('div');
  options.forEach(option => {
    const optionLabel = document.createElement('label');
    optionLabel.innerText = option;

    const optionRadio = document.createElement('input');
    optionRadio.type = 'radio';
    optionRadio.name = 'answerOption';
    optionRadio.value = option;

    optionsContainer.appendChild(optionRadio);
    optionsContainer.appendChild(optionLabel);
    optionsContainer.appendChild(document.createElement('br'));
  });

  const submitButton = document.createElement('button');
  submitButton.innerText = 'Verificar Resposta';
  submitButton.addEventListener('click', checkAnswer);

  document.getElementById('answerContainer').innerHTML = '';
  document.getElementById('answerContainer').appendChild(optionsContainer);
  document.getElementById('answerContainer').appendChild(submitButton);
}

// Aqui conta as respostas certas
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answerOption"]:checked');
  if (!selectedOption) {
    alert('Por favor, selecione uma opção.');
    return;
  }
  const userAnswer = selectedOption.value;
  const correctAnswer = questions[questionIndex].answer;
  if (userAnswer === correctAnswer) {
    correctAnswersCount++;
  }

  questionIndex++;
  showQuestion();
}

// Aqui eu agradeço
function displayFinalMessage() {
  const resultMessage = document.getElementById('resultMessage');
  resultMessage.innerText = "Meu querido(o)! Você acertou " + correctAnswersCount + " de " + questions.length + " perguntas.";
  document.getElementById('questionContainer').innerText = '';
  document.getElementById('answerContainer').innerHTML = '';

  const backButton = document.createElement('button');
  backButton.innerText = 'Voltar para o Menu';
  backButton.addEventListener('click', function() {
    // Voltando pro menu principal
    window.location.href = "index.html";
  });

  document.getElementById('answerContainer').appendChild(backButton);
}

// Reinicia o quizz
document.addEventListener('DOMContentLoaded', startQuiz);
document.getElementById('backToMenuBtn').addEventListener('click', function() {
  // Redireciona de volta para o menu
  window.location.href = "index.html";
});
