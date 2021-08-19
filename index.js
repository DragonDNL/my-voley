const Jogador = require('./Jogador');
const Jogo = require('./jogo');
const Ponto = require('./Ponto');
const Set = require('./Set');
const TipoPonto = require('./TipoPonto');
console.log("Iniciando");

var hour = new Date();
var data = new Date();

var novoJogo = new Jogo(data, hour, 'Rio Largo');
novoJogo.info();

var jogador1 = new Jogador('J1', 5);
var jogador2 = new Jogador('J2', 51);
var jogador3 = new Jogador('J3', 52);
var jogador4 = new Jogador('J4', 53);
var jogador5 = new Jogador('J5', 54);
var jogador6 = new Jogador('J6', 55);
var jogador7 = new Jogador('J7', 56);
var jogador8 = new Jogador('J8', 57);
var jogador9 = new Jogador('J9', 58);
var jogador10 = new Jogador('J10', 59);
var jogador11 = new Jogador('J11', 50);
var jogador12 = new Jogador('J12', 43);

var set = new Set();
novoJogo.addSet(set);
set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
set.registrarPonto(new Ponto(jogador2, false, TipoPonto.saque));
set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
set.registrarPonto(new Ponto(jogador2, false, TipoPonto.erroAdversario));
set.registrarPonto(new Ponto(jogador3, false, TipoPonto.saque));
set.registrarPonto(new Ponto(jogador6, true, TipoPonto.saque));
console.log('Maior pontuador : ', set.getMaiorPontuador());
console.log('Tipo : ', set.getListaPontosPorTipo(TipoPonto.bloqueio));
console.log('Total casa: ', set.getTotalPontosCasa());
console.log('Total adversario: ', set.getTotalPontosAdversario());
