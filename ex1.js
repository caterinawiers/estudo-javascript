/*Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100
Faça um programa que receba os 5 primeiros sorteados para os alunos e mostre o
maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98

*/

const { gets, print } = require('./funcoesauxiliares1');


//adicionar a quantidade de entradas numa lista e ver nessa lista qual é o maior
//usar o for para repetição, nesse caso, de 0 a 5

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
 }

let maiorValor = 0;

 for (let i = 0; i < numerosSorteados.length; i++) {
     const numeroSorteado = numerosSorteados[i];
     if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
     }

 }

 print(maiorValor);

 //otimizando o código

 let maiorValor = 0;

 for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
 } 
 print(maiorValor);

 //para ficar totalmente dinâmico:

 const { gets, print } = require('./funcoesauxiliares1');
 const quantidadeDeAlunos = gets();
 let maiorValor = 0;

 for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado; 
 }
}

print(maiorValor);