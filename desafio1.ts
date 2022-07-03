// desafio1

const employee: {name: string, code: number} = {
    name: 'John',
    code: 10,
}

// desafio2

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro
}

const pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
}

const pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa3: Pessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
}

const pessoa4: Pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}

// desafio3

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if(campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if(campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if(botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});