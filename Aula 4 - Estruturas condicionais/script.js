/* Estruturas condicionais:
São instruções para realizar determinadas tarefas a partir de uma condição,
seja de decisão ou de repetição;
Ex: Um jogo precisa mudar o placar toda vez que um jogador marca pontuação;

Palavras reservadas:
'if' para estabelecer uma condição
*/

ex: var jogador1 = 0;
var jogador2 = 0;

if(jogador1 > 0){
    console.log('jogador1 marcou ponto');
} else if (jogador2 > 0) {
    console.log('jogador2 marcou ponto');
} else {
    console.log('ninguém marcou ponto');
}

/* Podemos utilizar o "if" dentro de outro "if" -> aninhamento de if's 
ou ninho de if's */

if(jogador1 = -1) {
    if(jogador1 > 0) {
        console.log('jogador1 marcou ponto');
    } else {
        console.log('ninguém marcou ponto');
    }
     } else {
        console.log('jogador inválido');
     }


/* If ternário:"podemos fazer uma verificação em uma única linha, usando '?', ':' e 
instruções entre []
ex: condição ? [instrução1] : [instrução1];
jogador > 0 ? console.log('marcou ponto') : console.log('não marcou ponto');
!== sinal de diferença no JavaScript
*/

// if ternário
jogador1 !== -1 && jogador2 !== -1 ? console.log('Os jogadores são inválidos') :
console.log('Jogadores Inválidos');

//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}

//usando else if
else if (jogador2 > 0 && jogador1 ==0) {
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}

//usando else
else {
    console.log('Ninguém marcou ponto');
}

/*Switch case: funciona como estrutura condicional também
A palavra 'break'faz ele parar, senão ele fica em looping infinito
Ex: switch(${expressao}) {
    case 1:
        ${instrucao};
        break;
        case 2:
            ${instrucao};
            break;
}

default -> funciona como valor padrão, um "else"
*/

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break; 
        default
        console.log('Ninguém ganhou');   
}

/* Estruturas de repetição

São estruturas condicionais que repetem uma instrução até atingir determinada
condição

For 
Repetição de instrução até que uma condição seja falsa
for([expressaoInicial]; [condicap]; [incremento]){
    declaracao}
    Ex: var array = ['valor1', 'valor2', 'valor3', 'valor4']
    for(let i = 0; i < array.length; i++){
        console.log(i);
    }
    */
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}
/*For/in
Repetição a partir de uma propriedade // com array
for([indice] in [objeto ou array]) {
    declaracao}
    Ex: var array = ['valor1', 'valor2', 'valor3', 'valor4']
    for(i in array){
        console.log(i);
    }
    */
//com array:
for (let i in array) {
    console.log(i);
}
// for in com object:
for (i in object) {
    console.log(i);
}

/*For/of
Repetição a partir de um valor
for([indice] of [array]) {
    declaracao}
    Ex: var array = ['valor1', 'valor2', 'valor3', 'valor4']
    for (i of array){
        console.log(i);
    }
O for/of não funciona com objetos, pois as propriedades variam, diferente do índice
em um arrau que sempre será um número inteiro.
    */
//com array:
for (i of array) {
    console.log(i);
}
/*se eu quiser declarar o valor mesmo para objetos:
Ex: for (i of object.propriedade){
    console.log(i);
}
porém cada caractere dentro do valor será impresso em linhas separadas*/
for (i of object.propriedade1){
console.log(i);
}

/*While
Executa uma instrução enquanto determinada condição for verdadeira, a 
verificação é feita antes da execução
Ex: var = 0
while(a < 10){
    a++;
    console.log(a);
}
Como ler: enquanto a variável a for menor que 10 ela vai receber mais um e
imprimir no console
*/
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

/*Do/While
Executa uma instrução até que determinada condição seja falsa, a verificaçãp é
feita depois da execução
Ex: var a = 0
do {
    a++;
    console.log(a);
    } while (a < 10)
Como ler: a variável a vai receber mais um e imprimir no console até que seu
valor chegue a 10
