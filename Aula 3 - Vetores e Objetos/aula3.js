/* Arrays são um  tipo de lista, ou matriz de variáveis, onde cada variável possui 
um índice. Os valores podem ser de vários tipos de dados.
Imagina que um array é uma caixa com várias outras caixas dentro e cada uma contendo
um valor.
deve ser declarado entre colchetes [] e pode guardar qualquer valor dentre de seus
índices, inclusive outros arrays.
Obs: O índice só é acessado por um número inteiro, onde 0 é o primeiro índice. 
Cada índice é separado por vírgula. */

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[0]);

/*retorna string

Manipulando Arrays:"
Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo:

forEach() = itera um array. Faz uma repetição para cada item ou índice dentro
de um array
push() = add item no final do array;
pop() = remove item no final do array;
shift() = remove item no início do array;
unshift() = add item no início do array;
indexOf() = retorna o índice de um valor;
splice() = remove ou substitui um item pelo índice;
slice() = retorna uma parte de um array existente;
*/

array.forEach(function(item, index){console.log(item, index)}) 
/*faz repetição*/

array.push('novo item');
console.log(array);
/*adiconou um novo item no final do array. Nesse caso, retornou 'novo item'*/

array.pop();
console.log(array);
/*retorna 7 e não 8 itens, retirou o último */

array.shift();
console.log(array);
/*retornou 7, tirou o primeiro item*/

array.unshift('novoItemNoInicio');
console.log(array);
/*retornou com adição do novo item n o início*/

console.log(array.indexOf(true));
/*retorna que o índice do valor true é 2, já que topdo array começa com 0*/

array.splice(0, 3);
console.log(array);
/*apagou do 0 ao 3o e apagou tudo, tornando os outros e devolveu como
se fosse um novo array*/

let novoArray = array.slice(0, 3);
console.log(novoArray);
/*pega do 0 ao 3*/

/*Objetos
Dados que possuem propriedades e valores que definem suas características
Deve ser declarado enttre {}
Objetos podem guardar objetos assim como arrays podem guardar arrays
var xicara = {
    cor: 'azul',
    tamanho = 'p',
    funcao = tomarCafe()
}

Manipulando objetos:
As propriedades de objetos podem ser atribuídas às variáveis, facilitando a mani-
pulação do objeto. Chamamos isso de desestruturação

var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();

let object = { string: 'string', number: 1, boolean: true, array: ['array']
, objectInterno: {object: {objectInterno}};
console.log(object.objectInterno);

console.log(objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

também podemos fazer desestruturação a partir de chaves no momento da declaração
da variável:
var {string, boolean, objectInterno} = object;
var {cor, tamanho, funcao} = xicara;


