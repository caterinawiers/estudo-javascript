const funcoes = require('./funcoesauxiliares');
console.log(funcoes.gets());
//o require importa aquilo que está sendo exporta pelo outro arquivo

//quando temos um objeto, podemos destruí-lo. object destruction
//o node faz um cache. ele importa e roda tudo pela primeira vez e depois ele 
//vai armazenando

const pessoa = {
    nome: 'vitor';
}


const { nome } = pessoa;
const nome = pessoa.nome;
//são objetos equivalentes


//uma coisa mais avançada:
const { gets, print } = require('./funcoesauxiliares');
print(gets());