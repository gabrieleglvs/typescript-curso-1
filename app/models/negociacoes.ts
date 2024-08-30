import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

//instanciando ou seja, criando uma lista vazia
const negociacoes = new Negociacoes();
