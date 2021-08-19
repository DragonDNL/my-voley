const Ponto = require('./Ponto');

module.exports = class Set {
    constructor() {
        this.pontosCasa = 0;
        this.pontosAdversario = 0;
        this.pontos = [];
    }

    getMaiorPontuador() {
        var maiorJogador = null;
        this.pontos.forEach(
            (ponto) => {
                if (maiorJogador == null || (ponto.getJogador().getTotalPontosJogador() > maiorJogador.getTotalPontosJogador())) {
                    maiorJogador = ponto.getJogador();
                }
            }
        );
        return maiorJogador;
    }

    getListaPontosPorTipo(tipo) {
        var listaPontos = [];
        this.pontos.forEach(
            (ponto) => {
                if (ponto.getTipo() == tipo) {
                    listaPontos.push(ponto);
                }
            }
        );
        return listaPontos;
    }

    registrarPonto(ponto) {
        this.pontos.push(ponto);
        if (ponto.getVantagemDaCasa()) {
            this.pontosCasa++;
        } else {
            this.pontosAdversario++;
        }
    }
    getTotalPontosCasa() {
        return this.pontosCasa;
    }
    getTotalPontosAdversario() {
        return this.pontosAdversario;
    }
}