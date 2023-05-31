/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde
para dar um a indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elaborte um  algoritmo que dado o peso e a altura de um adulto mostre a sua condição
de acordo com a tabela abaixo:

IMC em adultos condição:
- Abaixo de 18.5 = abaixo do peso;
- Entre 18.5 e 25 = peso normal;
- Entre 25 e 30 = acima do peso;
- Entre 30 e 40 = obeso;
- Acima de 40 = Obesidade grave;

tudo maiúsculo é uma constante FIXA, por exemplo, PI

*/

const peso = 65;
const altura = 1.70;
const imc = peso / Math.pow(altura,2);
console.log(imc)

if (imc < 18.5){
    console.log('abaixo do peso');
}

else if (imc >= 18.5 && imc <= 25){
    console.log('peso normal');
}

else if (imc >= 25 && imc < 30){
    console.log('acima do peso');
}

else if (imc >= 30 && imc <40){
    console.log('obeso');
}

else {
    console.log('obesidade grave');
}