//para percorrer dinamicamente uma lista, usamos uma estrutura de repetição
// for funciona para percorrer dinamicamente uma quantidade específica de vezes
// for é dividido em 3 partes
// primeira: declaraçãp
// segunda: estrutura condicional (se tal for tal. Se continua percorrendo dentro do 
// corpo fo for ou não)
//terceira: o que vai acontecer depois de executar o for
//i++ incrementa 1 na própria variável Iteração do for
//let i = 1;
//i = i+1;
//string é um array de caracteres

const notas = [];

notas.push(5);
notas.push[7];
notas.push[8];
notas.push[2];
notas.push[5];

const soma = notas[0] + notas[1]  + notas[2] + notas[3] + notas[4];

console.log(soma / 5);


const nome = 'Vitor Johansen Guerra';

for (let i = 0; i < nome.length; i++) {
    const letra = (nome[i]);
    console.log(letra);
}

//iteração das notas
const notas = [];

notas.push(5);
notas.push[7];
notas.push[8];
notas.push[2];
notas.push[5];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;
console.log(media);

//para excutar em modo depuração - executar e depurar = DEBUGAR/DEBUGANDO
//depuração serve para entendermos o que está acontecendo no código
//break point = ponto de interrupção