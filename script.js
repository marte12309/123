document.addEventListener('DOMContentLoaded', function(){
   const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
   const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

   botaoDeAcessibilidade.addEventListener("click", function(){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expand') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   })

   const aumentaFonteBotao = document.getElementById('aumentar-fonte');
   const diminuiFonteBotao = document.getElementById('diminuir-fonte');

   const alternaContraste = document.getElementById('alterna-contrastre')

   let tamanhoAtualFonte = 1;

   aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte +=0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`

   })

   diminuiFonteBotaoFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -=0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`

   })

   alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
   })

})

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#chico-buarque', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });