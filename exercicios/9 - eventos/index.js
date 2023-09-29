/*
Eventos de Mouse:

    click: Ocorre quando um elemento é clicado.
    mouseover: Ocorre quando o cursor do mouse entra em um elemento.
    mouseout: Ocorre quando o cursor do mouse deixa um elemento.
    mousedown: Ocorre quando um botão do mouse é pressionado.
    mouseup: Ocorre quando um botão do mouse é solto.
-----------------------------------------------------------------------------------------------------------
Eventos de Teclado:

    keydown: Ocorre quando uma tecla é pressionada.
    keyup: Ocorre quando uma tecla é liberada.
    keypress: Ocorre quando uma tecla é pressionada e depois liberada.
-----------------------------------------------------------------------------------------------------------
Eventos de Formulário:

    submit: Ocorre quando um formulário é enviado.
    change: Ocorre quando o valor de um elemento de formulário muda (input, select, etc.).
    focus: Ocorre quando um elemento recebe foco.
    blur: Ocorre quando um elemento perde foco.
-----------------------------------------------------------------------------------------------------------
Eventos de Janela:

    load: Ocorre quando uma página ou recurso é totalmente carregado.
    resize: Ocorre quando a janela do navegador é redimensionada.
    scroll: Ocorre quando a barra de rolagem da página é movida.
-----------------------------------------------------------------------------------------------------------
Eventos de Tempo:

    setTimeout: Programa uma função para ser executada após um intervalo de tempo.
    setInterval: Programa uma função para ser executada repetidamente em intervalos regulares.
-----------------------------------------------------------------------------------------------------------
Eventos de Toque (para dispositivos móveis):

    touchstart: Ocorre quando um dedo toca a tela.
    touchmove: Ocorre quando um dedo se move na tela.
    touchend: Ocorre quando um dedo é retirado da tela.
-----------------------------------------------------------------------------------------------------------
Eventos de Arrastar e Soltar (drag and drop):

    dragstart: Ocorre quando um elemento é arrastado.
    dragover: Ocorre quando um elemento é arrastado sobre outro.
    drop: Ocorre quando um elemento é solto em outro.
-----------------------------------------------------------------------------------------------------------
Eventos de Mídia:

    play: Ocorre quando um elemento de mídia (vídeo ou áudio) começa a ser reproduzido.
    pause: Ocorre quando um elemento de mídia é pausado.
*/

function mudarBG() {
  document.body.style.backgroundColor = "cornflowerblue";
}

function buttonCorPadrao() {
  document.body.style.backgroundColor = "white";
}

function mudarCorDiv() {
  let cor1 = document.getElementById("bloco");
  cor1.style.backgroundColor = "gray";
}

function divCorPadrao() {
  let cor2 = document.getElementById("bloco");
  cor2.style.backgroundColor = "coral";
}
