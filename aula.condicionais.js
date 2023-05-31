const numero = 2;
const isnumeroPar = (numero % 2) === 0;
/* %  é para mostrar o resto da divisão do número. 
Se o resto for zero, ele é par (true), se o resto for maior que zero, é ímpar 
3 iguais é para fazer uma comparação de igualdade */

if (numero ===0) {
    console.log('O número é inválido');
}

else if (isnumeroPar) {
    console.log('Par');
}

if(!isnumeroPar) {
    console.log('Impar');
}
/* para negar uma condicional, usa-se a exclamação antes da constante 
Ou fazer assim para economizar espaço:

else {
    console.log('Impar')
}
*/