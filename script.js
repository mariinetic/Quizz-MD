// Variáveis globais
let correctAnswersCount = 0;
let questionIndex = 0;

// Função para iniciar o quiz
function startQuiz() {
  document.getElementById('generateBtn').addEventListener('click', showQuestion);
}

// Função para exibir a próxima pergunta
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

// Função para verificar a resposta
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

// Função para exibir a mensagem final
function displayFinalMessage() {
  const resultMessage = document.getElementById('resultMessage');
  resultMessage.innerText = "Obrigado por participar! Você acertou " + correctAnswersCount + " de " + questions.length + " perguntas.";
  document.getElementById('questionContainer').innerText = '';
  document.getElementById('answerContainer').innerHTML = '';

  const backButton = document.createElement('button');
  backButton.innerText = 'Voltar para o Menu';
  backButton.addEventListener('click', function() {
    // Redireciona de volta para o menu
    window.location.href = "index.html";
  });

  document.getElementById('answerContainer').appendChild(backButton);
}

// Inicializa o quiz quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', startQuiz);
document.getElementById('backToMenuBtn').addEventListener('click', function() {
  // Redireciona de volta para o menu
  window.location.href = "index.html";
});