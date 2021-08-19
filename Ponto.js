const Jogo = require('./Jogador');

module.exports = class Ponto {
    constructor(jogador, vantagemDaCasa, tipo) {
        this.tipo = tipo;
        this.jogador = jogador;
        this.vantagemDaCasa = vantagemDaCasa;
        this.jogador.adicionarPonto();
    }
    getVantagemDaCasa() {
        return this.vantagemDaCasa;
    }
    getJogador() {
        return this.jogador;
    }
    getTipo() {
        return this.tipo;
    }
}