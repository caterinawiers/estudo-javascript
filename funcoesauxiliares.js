// distribução e encapsulamento e isolamento de complexidade
// para não configurar nada 

//funções chave
//GETS: pela uma leitura como seu fossse um input
//PRINT: como se fosse um console.log

//programar como se estivesse dentro da plataforma DIO

//gets mocado: mocked = de simulação 

function gets (){
       return 10;
}

function print(texto){
    console.log(texto);
}

//defino um objeto que exportará um objeto literal, vai ter 2 atributos, que no caso
//são funções e se são funções e estão no objeto, são métodos. Método get e método print
// posso fazer: module.exports.gets = gets;   se caso tem algo novo
module.exports = {gets, print};