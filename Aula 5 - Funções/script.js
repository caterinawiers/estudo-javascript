/*Funções
São blocos de comandos e instruções para execução de determinadas tarefas
Ex: function nomeDaFuncao() {
    ${instrucao};
}

nomeDaFuncao);
*/

function funcao() {
    console.log('Tudo certom, jovem!');
}
funcao();

/* Geralmente se utiliza a palavra reservada 'function' seguida de () e {}
() - indica que é um objeto do tipo function;
{} - indica que é um bloco de instrução; 

Funções com parâmetros:
As funções podem receber em sua declaração parâmetros, que servem como variáveis, 
onde sdua atribuição pode ser feita durante a chamada da função:
Ex: function nomeDaFuncao(parametro) {
    ${instrucao};
}

nomeDaFuncao(valorDoParametro);
*/
function funcaoMensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}
funcaoMensagem('Tudo certo', 'jovem');
