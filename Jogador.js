module.exports = class Jogador {
    constructor(nome, camisa) {
        this.nome = nome;
        this.camisa = camisa;
    }
    totalPontos = 0;
    adicionarPonto() {
        this.totalPontos++;
    }
    getTotalPontosJogador() {
        return this.totalPontos;
    }
}