// Objeto é uma coleção dinâmica de chave e valor.
//Uma função dentro de um objeto é um método. o This assume um objeto.
// A função no final das contas acaba virando um objeto
// objeto literal:
const pessoa = {
    nome:'Vitor Guerra',
    idade: 25,
    
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.descrever();

//para substituir a função
pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}

// para acessar os valores com uma sintaxe mais dinâmica. A partir de uma 
//string eu acesso dinamicamente um atributo. É uma notação de coleção
const atributo = 'idade';
console.log(pessoa['atributo']);

//para incrementar o objeto dinamicamente:
pessoa.altura = 1.69;

//para remover:

delete pessoa.nome;

//para imprimir o valor:
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);