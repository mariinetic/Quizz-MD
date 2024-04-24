// Variáveis que vão ser usadas
let contador_acertos = 0;
let questoess = 0;

// Função para começar o meu quiz
function startQuiz() {
  document.getElementById('generateBtn').addEventListener('click', showQuestion);
}

// Aqui passa as perguntas
function showQuestion() {
  if (questoess >= perguntas.length) {
    displayFinalMessage();
    return;
  }

  const { perguntinha, opções, respostas } = perguntas[questoess];

  document.getElementById('contquest').innerText = perguntinha;

  const conteudo = document.createElement('div');
  opções.forEach(option => {
    const topçoes = document.createElement('label');
    topçoes.innerText = option;

    const optionRadio = document.createElement('input');
    optionRadio.type = 'radio';
    optionRadio.name = 'respostacerta';
    optionRadio.value = option;

    conteudo.appendChild(optionRadio);
    conteudo.appendChild(topçoes);
    conteudo.appendChild(document.createElement('br'));
  });

  const verificador = document.createElement('button');
  verificador.innerText = 'Verificar Resposta';
  verificador.addEventListener('click', checkAnswer);

  document.getElementById('contresp').innerHTML = '';
  document.getElementById('contresp').appendChild(conteudo);
  document.getElementById('contresp').appendChild(verificador);
}

// Aqui conta as respostas certas
function checkAnswer() {
  const seleção = document.querySelector('input[name="respostacerta"]:checked');
  if (!seleção) {
    alert('oops você não selecionou nada !');
    return;
  }
  const usuarios = seleção.value;
  const acertinhos = perguntas[questoess].respostas;
  if (usuarios === acertinhos) {
    contador_acertos++;
  }

  questoess++;
  showQuestion();
}

// Aqui eu agradeço
function displayFinalMessage() {
  const resultadinhos = document.getElementById('resultadinhos');
  resultadinhos.innerText = "Querido(a)! Você acertou " + contador_acertos + " de " + perguntas.length + " perguntas.";
  document.getElementById('contquest').innerText = '';
  document.getElementById('contresp').innerHTML = '';

  const voltando = document.createElement('button');
  voltando.innerText = 'Voltar para o Menu';
  voltando.addEventListener('click', function() {
    // Voltando pro menu principal
    window.location.href = "index.html";
  });

  document.getElementById('contresp').appendChild(voltando);
}

// Reinicia o quizz
document.addEventListener('DOMContentLoaded', startQuiz);
document.getElementById('backToMenuBtn').addEventListener('click', function() {
  // Redireciona de volta para o menu
  window.location.href = "index.html";
});
