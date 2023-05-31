/*Funções declarativas
Possuem o uso mais comum
Deve ser declarada usando a palavra reservada 'function' seguida do nomeDaFuncao 
() e {}
Ex: function nomeDaFuncao() {
    ${instruicao};
}
O nome da função é obrigatório
*/

function funcao () {
    console.loh('tudo certo, joivem!');
}

/* Expressões de funções
São funções atribuídas ãs expressões. A nomeação das funções por expressão é opcional:

Ex: var funcao = funcao nomeDaFuncao() { 
    ${instrucao};
}

Ex: var funcao = function () {
    ${instrucao};
}
*/
var funcao = fuction() {
    console.log('Sou uma mensagem de função de expressáo');
}
função();

/*Arrow function
São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas e, 
portanto, não podem ser nomeadas. Dever ser declarada com (), seguido de => e depois{}
Ex: var função = () => {
    ${instrucao};
}
*/
var funcao = () => {
    console.log('Sou uma arrow function');
}
funcao();

/*Métodos nativos do Javascript
numer() - para converter valores em números;
prompt() - para registrar entradas do usuário;
alert(0 - para mostrar mensagem ao usuário;
    template strings - para usar strings junto com expressões;