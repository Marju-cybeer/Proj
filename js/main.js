document.addEventListener('DOMContentLoaded', function () {
  const semanaOnButtons = document.querySelectorAll('.semanaOn');
  const horarioSection = document.getElementById('horario');
  const quantidadeSection = document.getElementById('quantidade');
  const horasSelect = document.getElementById('horas');
  const quantidadeInput = document.querySelector('#selecionar');
  const iconeQuantidade = document.querySelector('.iconeQuantidade');
  const preco = this.documentElement.querySelector('.preco');
  const mensagemValor = document.querySelector('#mensagem');
  const calendario = document.querySelector('.calendario');

  mensagemValor.style.color = 'green';
  mensagemValor.style.fontSize = '16px';
  mensagemValor.style.fontWeight = 'bold';
  horarioSection.style.display = 'none';
  quantidadeSection.style.display = 'none';
  calendario.style.display = 'none';
  const selectRemadaButtons = document.querySelectorAll('.selectRemadaPiaçaguera, .selectRemadaPorto, .selectRemadaIlhaMel, .selectRemadaNoturna');

  selectRemadaButtons.forEach(button => {
    button.addEventListener('click', function () {
      calendario.style.display = 'block';
      horarioSection.style.display = 'none';
      quantidadeSection.style.display = 'none';
    });
  });
  semanaOnButtons.forEach(button => {
    button.addEventListener('click', function () {
      horarioSection.style.display = 'block';
      quantidadeSection.style.display = 'none'; 
    });
  });
  horasSelect.addEventListener('change', function () {
    if (this.value !== "") {
      quantidadeSection.style.display = 'block';
      mensagemValor.textContent = '';
    } else {
      quantidadeSection.style.display = 'none';
    }
  });
  quantidadeInput.addEventListener('input', function () {
    const quantidade = parseInt(this.value) || 1; 
    iconeQuantidade.textContent = quantidade;
    const total = quantidade * 100;
    preco.textContent = `R$ ${total.toFixed(2)}`
    if (quantidade > 0) {
      mensagemValor.textContent = `Você selecionou ${quantidade} item(s).`;
    } else {
      mensagemValor.textContent = '';
    }
  });
  const agendamentoButtons = document.querySelectorAll('.semanaOn');
  agendamentoButtons.forEach(button => {
    button.addEventListener('click', function () {
      agendamentoButtons.forEach(btn => btn.classList.remove('selecionado'));
      this.classList.add('selecionado'); 
    });
  });
const remadaButtons = document.querySelectorAll('.selectRemadaPiaçaguera');
remadaButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    remadaButtons.forEach(function(b) {
      b.classList.remove('destaque');
    });
    this.classList.add('destaque');
  });
});
const confirmarButton = document.querySelector('.btn-confirmar');
confirmarButton.addEventListener('click', function() {
  alert('Agora confirme seu pagamento!');
  window.open('telaPagamento.html', '_blank'); 
});

});

