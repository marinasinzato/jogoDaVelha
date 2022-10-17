window.onload = reset;
const player1 = 'o';
const player2 = 'x';
const vazio = '';
let ganhou = false;

let ganhadorX = 0;
let ganhadorO = 0;
let empate = 0;
let qtdRodadas = 0;

let jogador = 0;
let tabuleiro =
  ['','', '',
    '','','',
    '','' ,''];

function avisoGanhador() {
  alert('Parabéns! Ganhador: ' + jogador);
  ganhou = true;
  if (jogador === player1) { 
    ganhadorX += 1;
    document.getElementById("ganhadorX").innerHTML = ganhadorX;
  } else {
    ganhadorO += 1;
    document.getElementById("ganhadorO").innerHTML = ganhadorO;
  }
  qtdRodadas += 1;
  document.getElementById("rodada").innerHTML = qtdRodadas + " RODADAS";
}

function mensagemEmpate() {
  alert("Empate!");
  document.getElementById("empate").innerHTML = empate;
  empate += 1;
  qtdRodadas += 1;
  document.getElementById("rodada").innerHTML = qtdRodadas + " RODADAS";
}

function reset() {
  jogador = player1;
  ganhou = false;
  for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`celula_${i}`);
    cell.innerHTML = '';
    tabuleiro[i] = vazio
  }
}

// const combinacoesGanhador - erro 
//  [0, 1, 2],
//  [3, 4, 5],
//  [6, 7, 8],
//  [0, 3, 6],
//  [1, 4, 7],
//  [2, 5, 8],
//  [0, 4, 8],
//  [2, 4, 6],]

function verificaGanhador() {
  //testar a primeira linha
  if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[1] && tabuleiro[0] === tabuleiro[2]) {
    avisoGanhador();
    return;
  }
  //Segunda Linha
  if (tabuleiro[3] !== vazio &&
    tabuleiro[3] === tabuleiro[4] && tabuleiro[3] === tabuleiro[5]) {
    avisoGanhador();
    return;
  }
  //Terceira Linha
  if (tabuleiro[6] !== vazio &&
    tabuleiro[6] === tabuleiro[7] && tabuleiro[6] === tabuleiro[8]) {
    avisoGanhador();
    return;
  }
  //Coluna Esquerda
  if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[3] && tabuleiro[0] === tabuleiro[6]) {
    avisoGanhador();
    return;
}
  //Coluna Meio
  if (tabuleiro[1] !== vazio &&
    tabuleiro[1] === tabuleiro[4] && tabuleiro[1] === tabuleiro[7]) {
    avisoGanhador();
    return;
  }
  //Coluna Direita
  if (tabuleiro[2] !== vazio &&
    tabuleiro[2] === tabuleiro[5] && tabuleiro[2] === tabuleiro[8]) {
    avisoGanhador();
    return;
  }
  //Inclinado
  if (tabuleiro[0] !== vazio &&
    tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8]) {
    avisoGanhador();
    return;
  }
  if (tabuleiro[2] !== vazio &&
    tabuleiro[2] === tabuleiro[4] && tabuleiro[2] === tabuleiro[6]) {
    avisoGanhador();
    return;
  }
  //Empate
  for (let i = 0; i < tabuleiro.length; i++) {
    if (tabuleiro[i] === vazio) return;
  }
  mensagemEmpate();
}

function jogada(numero) {
  if (ganhou === true) {
    alert("O Jogo acabou: ");
    return;
  }

  let cell = document.getElementById(`celula_${numero}`);

  if (tabuleiro[numero] === vazio) {
    cell.innerHTML = `<img src="${jogador}.svg" alt='jogador ${jogador}' />`;
    tabuleiro[numero] = jogador;
    jogador = (jogador === player1) ? player2 : player1;

    verificaGanhador();
  }
}










