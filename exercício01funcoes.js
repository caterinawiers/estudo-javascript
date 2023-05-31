/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um 
semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme 
a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;


Decompor o problema em problemas menores (pensamento computacional)
- Entrada
- Saída
- E como transformo um no outro
*/

/*Refatorando o código:*/ 

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5){
        return('abaixo do peso');
    }   else if (imc >= 18.5 && imc <= 25){
        return('peso normal');
    }   else if (imc >= 25 && imc < 30){
        return('acima do peso');
    }   else if (imc >= 30 && imc <40){
        return('obeso');
    }   else {
        return('obesidade grave');
    }
    
}

// Main

(function (){
    const peso = 65;
    const altura = 1.70;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})
();

/* função imediatamente invocada. Coloca entre parênteses para ela 
ser execuatada primeiro, depois vc tira o nome dela, e chama por parênteses)
*/