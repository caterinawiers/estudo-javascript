// Listas:
// No JavaScript a posição 0 é sempre o primeiro
// para adiconar dinamicamente algo, editar é o .push
//ou posso adicionar no fim  da listam diretamente com a posição
// .pop remove o último da lista e imprime direto - tira ele e pega de fato
// .shift é o primeiro
// para saber o tamanho da lista .lenght
//temos várias estruturas de repetição


const alunos = ['João', 'Vitor', 'Marina'];
alunos.push('Renan');
alunos[4] = 'Vinicius';
console.log(alunos[0]);

//

const alunos = [];
alunos.push('teste');
alunos.push(10);
console.log(alunos);

//

const alunos = ['1', '2', '3'];
console.log(alunos);
console.log(alunos.pop());
console.log(alunos.shift());

//

const notas = [];

notas.push(5);
notas.push[7];
notas.push[8];
notas.push[2];
notas.push[5];

const soma = notas[0] + notas[1]  + notas[2] + notas[3] + notas[4];
console.log(soma / 5);