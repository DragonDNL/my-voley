const Jogador = require('./Jogador');
const Jogo = require('./jogo');
const Ponto = require('./Ponto');
const Set = require('./Set');
const TipoPonto = require('./TipoPonto');


beforeEach(() => {
});


test('Jogador que mais fez pontos',
    () => {
        var set = new Set();
        var jogador1 = new Jogador('', 1);
        var jogador2 = new Jogador('', 2);
        var jogador3 = new Jogador('', 3);
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador1, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador1, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, true, TipoPonto.Ataque));
        set.registrarPonto(new Ponto(jogador3, true, TipoPonto.Ataque));
        set.registrarPonto(new Ponto(jogador3, true, TipoPonto.Ataque));
        set.registrarPonto(new Ponto(jogador3, true, TipoPonto.Ataque));
        set.registrarPonto(new Ponto(jogador3, true, TipoPonto.Ataque));
        expect(set.getMaiorPontuador()).toBe(jogador3);
    }
);

test('O total de pontos do time do adversário',
    () => {
        var set = new Set();
        var jogador1 = new Jogador('', 1);
        var jogador2 = new Jogador('', 2);
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));

        expect(set.getTotalPontosAdversario()).toEqual(3);
    }
);


test('Total de pontos do time da casa',
    () => {
        var set = new Set();
        var jogador1 = new Jogador('', 1);
        var jogador2 = new Jogador('', 2);
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));

        expect(set.getTotalPontosCasa()).toBe(2);
    }
);

test('Tipo de ponto : Bloqueio',
    () => {
        var listaEsperada = [];
        var set = new Set();
        var jogador1 = new Jogador('', 1);
        var jogador2 = new Jogador('', 2);

        listaEsperada.push(new Ponto(jogador2, false, TipoPonto.bloqueio));
        listaEsperada.push(new Ponto(jogador2, false, TipoPonto.bloqueio));

        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
        expect(set.getListaPontosPorTipo(TipoPonto.bloqueio)).toEqual(listaEsperada);
    }
);

test('Tipo de ponto : Contra Ataque',
    () => {
        var listaEsperada = [];
        var set = new Set();
        var jogador1 = new Jogador('', 1);
        var jogador2 = new Jogador('', 2);

        listaEsperada.push(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        listaEsperada.push(new Ponto(jogador2, false, TipoPonto.contraAtaque));

        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
        expect(set.getListaPontosPorTipo(TipoPonto.contraAtaque)).toEqual(listaEsperada);
    }
);


test('Tipo de ponto : Saque',
    () => {
        var listaEsperada = [];
        var set = new Set();
        var jogador1 = new Jogador('', 1);
        var jogador2 = new Jogador('', 2);

        listaEsperada.push(new Ponto(jogador1, true, TipoPonto.saque));
        listaEsperada.push(new Ponto(jogador1, true, TipoPonto.saque));
        listaEsperada.push(new Ponto(jogador1, true, TipoPonto.saque));

        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
        expect(set.getListaPontosPorTipo(TipoPonto.saque)).toEqual(listaEsperada);
    }
);
test('Tipo de ponto : Ataque',
    () => {
        var listaEsperada = [];
        var set = new Set();
        var jogador1 = new Jogador('', 1);
        var jogador2 = new Jogador('', 2);

        listaEsperada.push(new Ponto(jogador1, true, TipoPonto.ataque));
        listaEsperada.push(new Ponto(jogador2, false, TipoPonto.ataque));

        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.ataque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.ataque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.bloqueio));
        expect(set.getListaPontosPorTipo(TipoPonto.ataque)).toEqual(listaEsperada);
    }
);
test('Tipo de ponto : erroAdversario',
    () => {
        var listaEsperada = [];
        var set = new Set();
        var jogador1 = new Jogador('', 1);
        var jogador2 = new Jogador('', 2);

        listaEsperada.push(new Ponto(jogador2, false, TipoPonto.erroadversario));
        listaEsperada.push(new Ponto(jogador2, false, TipoPonto.erroadversario));
        listaEsperada.push(new Ponto(jogador2, false, TipoPonto.erroadversario));

        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.ataque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador1, true, TipoPonto.saque));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.erroadversario));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.erroadversario));
        set.registrarPonto(new Ponto(jogador2, false, TipoPonto.erroadversario));
        expect(set.getListaPontosPorTipo(TipoPonto.erroadversario)).toEqual(listaEsperada);
    }
);

test('Pontuação jogador especifico',
    () => {
        var set = new Set();

        var jogador = new Jogador('', 1);

        set.registrarPonto(new Ponto(jogador, true, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador, false, TipoPonto.contraAtaque));
        set.registrarPonto(new Ponto(jogador, false, TipoPonto.contraAtaque));

        expect(jogador.getTotalPontosJogador()).toBe(3);
    }
);

test('Verificar informações do jogo',
    () => {
        var textoEsperado = "O jogo acontece em 19/08/2021 as 17:47:0 no local Rio Largo";
        var data = new Date(2021, 7, 19, 17, 47, 0, 0);
        var local = 'Rio Largo';
        var jogo = new Jogo(data, data, local);

        expect(jogo.info()).toEqual(textoEsperado);
    }
);