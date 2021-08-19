const Ponto = require('./Set');

module.exports = class Jogo {
    constructor(data, hora, local, juiz, adversario) {
        this.data = data;
        this.hora = hora;
        this.local = local;
        this.sets = [];
        this.juiz = juiz;
        this.adversario = adversario;
    }

    dataFormata(data) {
        var dia = data.getDate().toString();
        var diaF = (dia.length == 1) ? '0' + dia : dia;
        var mes = (data.getMonth() + 1).toString(); //+1 pois no getMonth Janeiro começa com zero.
        var mesF = (mes.length == 1) ? '0' + mes : mes;
        var anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }

    horaFormata(data) {
        var hora = data.getHours();
        var minutos = data.getMinutes();
        var segundos = data.getSeconds();
        return hora + ":" + minutos + ":" + segundos;
    }

    info() {
        return "O jogo acontece em " + this.dataFormata(this.data) + " as " + this.horaFormata(this.hora) + " no local " + this.local;
    }
    addSet(set) {
        this.sets.push(set);
    }
}

