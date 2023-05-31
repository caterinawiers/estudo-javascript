// crie um programa que seja capaz de percorrer uma lista de números e imprima
// cada número par encontrado
// avaliar se um número é par - resto da divisão por 2 é igual a 0, então ele é par

//primeicro: criar uma lista de números fictícia

const numeros = [0,1,2,3,4,5,6,7,8,9,10]; //lista com 11 números

for (let i = 0; index < numeros.length; i++) {
    const numero = numeros[i]; //aqui configuramos o looping. Executa esse trecho
    //de código enqaunto a condição acima for verdadeira
    if (numero % 2 === 0){ //se o resto da divisão por 2 é igual a 0, ele imprime o numero
        console.log(numero);
    }

}
