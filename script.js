const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo')
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');

const tempoAtualSpan = document.getElementById('tempo-atual');
const tempoTotalSpan = document.getElementById('tempo-total');

const numeroCapitulos = 10;

let taTocando = 0;
let capituloAtual = 1;

// xxxxxxxxxx

function atualizarTempoAtual() {
    const minutos = Math.floor(audioCapitulo.currentTime / 60);
    const segundos = Math.floor(audioCapitulo.currentTime % 60);
    tempoAtualSpan.innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }
  
  function atualizarTempoTotal() {
    const minutos = Math.floor(audioCapitulo.duration / 60);
    const segundos = Math.floor(audioCapitulo.duration % 60);
    tempoTotalSpan.innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }

// xxxxxxxxxx

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

function pausarFaixa(){
    audioCapitulo.pause()
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function tocarOupausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }else{
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = `Capitulo ${capituloAtual}`;
}


function proximaFaixa(){
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual+=1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}


function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual-=1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

audioCapitulo.addEventListener('timeupdate', atualizarTempoAtual);
audioCapitulo.addEventListener('durationchange', atualizarTempoTotal);

botaoPlayPause.addEventListener('click', tocarOupausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);