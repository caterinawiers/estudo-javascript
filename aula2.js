//para criar um modelo do objeto. Para que eu não precise ficar repetindo
//para isso, preciso criar uma classe, por exemplo, a classe pessoa
//a responsabilidade da classe é definir pessoa para que elas sejam instanciadas
//a classe é uma definição do que deveria ser (como um objeto deve ser) e instância 
// é uma ocorrência de uma pessoa

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
//o constructor obriga que sempre que uma pessoa for instanciada, ele peça nome e idade
//ele prepara atributos
//contribui para evidenciar deduções

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
//como eu instancio:
const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

console.log(vitor);
console.log(renan);

vitor.descrever();
renan.descrever();

//não vou mais repetir todo o código de descrever

//constructor é o que acontece quando uma pessoa é instaciada
const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

//orientação a objeto - criar definições, contratos de como tem que ser um objeto.
//e as instancias que vão seguindo esses contratos criando novas ocorrências de objetos
//(ou pessoas, como no exemplo)