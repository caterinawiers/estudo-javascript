function escrevaMeuNome (nome){
    console.log('Meu nome é ' + nome);
    }
escrevaMeuNome('Caterina');

/*função para ver se eu sou maior de idade*/

function verMaioridade (idade){
    if (idade >= 18){
        console.log('maior de idade');
    }
    else {
        console.log('menor de idade');
    }
}

verMaioridade(32);

//ou

function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
    }

function verMaioridade(idade){
    if (idade >=18){
        console.log(escrevaMeuNome('Caterina') + ' e ela é maior de idade');
    }
    else {
        console.log(' e ela é menor de idade');
    }
}

verMaioridade(32);