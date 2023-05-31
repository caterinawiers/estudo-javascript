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

const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
const ismedia = (nota1 + nota2 + nota3) / 3;

if (ismedia < 5){
    console.log('reprovado');
}

else if (ismedia >= 5 && ismedia <= 7){
    console.log('recuperação');
}

else {
    console.log('aprovado');
}

