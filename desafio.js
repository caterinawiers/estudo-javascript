/* Faça um  programa para calcular o valor de uma viagem.
Você terá 3 variáveis:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em Km da viagem;

*/ 

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

