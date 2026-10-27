
const cartoes = document.querySelectorAll('.cartao');

const tituloDetalhe = document.querySelector('#detalhe-titulo');
const textoDetalhe = document.querySelector('#detalhe-texto');

cartoes.forEach(function(cartao) {
  cartao.addEventListener('click', function() {

    cartoes.forEach(function(item) {
      item.classList.remove('ativo');
    });

    cartao.classList.add('ativo');

    tituloDetalhe.textContent = cartao.dataset.titulo;
    textoDetalhe.textContent = cartao.dataset.detalhe;

  });
});

const botaoCuriosidade = document.querySelector('#botao-curiosidade');
const curiosidade = document.querySelector('#curiosidade');

botaoCuriosidade.addEventListener('click', function() {

  if (curiosidade.hidden) {
    curiosidade.hidden = false;
    botaoCuriosidade.textContent = 'Esconder curiosidade';
  } else {
    curiosidade.hidden = true;
    botaoCuriosidade.textContent = 'Mostrar uma curiosidade';
  }

});
