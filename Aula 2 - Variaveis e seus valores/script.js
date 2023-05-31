//tipos primitivos


//booleanos
var VOuF = false;
console.log(typeof(VOuF));
//jeito nativo para saber o tipo de vari'avel typeof(nome da variável)


//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'caterina';
console.log(typeof(nome));

/*3 modos de declarar variável:
var = escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial
será tratado como null;

let = escopo local de bloco, pode ter seu valor alterado, se não tiver um valor
incial será tratado como null; permite alterar seu valor após a criação.

const = escopo local de bloco, somente leitura, o valor inicial é obrigatório e
inalterável, não pode ser reatribuída. Se eu alterar, vai dar erro.

Escopo:

O escopo em JavaScript define a limitação e visibilidade de um bloco de código

Escopo global: quando a variável é declarada fora de qualquer bloco, sua visibilidade
fica disponível em todo código.

Escopo local: quando a variável é declarada dentro de um bloco, sua visibilidade
pode ficar disponível ou não.

a variável let usamos por convenção dentro de escopo local

quando está dentro de uma função, o escopo é local
fora é global, ent	ao ela é vista por todo código
para resolver isso, dela ser declarada, mas não vista, colocamos o console.log 
dentro da função e chamamos a função embaixo
*/

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
}

console.log(escopoLocalInterno);

/* regar de uso de variáveis:
😍nunca inicie uma variável com números
😍inicie com letras, _ ou $
😍não use espaços
😍primero nome minúsculo e segundo nome começa com maiúsculo nomeCompleto
ou use: nome|completo ou nome_completo
😍não usar palavras reservadas (métodos nativos, com o let, const, function)
😍declarar variáveis no topo do bloco de código

Sinal "=" é uma atribuição. Uma variável recebe um valor
Para comparação "==", sempre retorna um valor booleano, ou seja, V ou F
Para comparação idêntica (compara valor e tipo) "==="
   exemplo: '0'===0
   '0'tem valor e tipo idêntico a 0?
   Falso, pois está entre aspas, então é uma string

   Operadores aritméticos:
   +
   -
   * multiplicação
   / divisão real
   ** exponenciação
   % resto da divisão

   operadores relacionais: consultam a relação entre os valores
   >
   <
   >=
   <=

   operadores lógicvos: consultam valores lógicos
   && 'e' - considera que todos os valores sejam true;
   || 'ou' - considera que qualquer valor seja true;
   ! 'não' - inverte o valor de true para false ou vice-versa;
