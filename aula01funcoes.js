/* funções são bloquinhos de código que eu posso chamar após a declaração dela.
são pequenos trechos de código que eu consigo invocar e dinamizar as coisas, parametros e
conseguindo utilizar isso.

Para chamar a função:
function nomedafunção(parâmetros da função)
Exemplo:
function sayMyName(name){
    console.log('Your name is' + name);
}

Funções que não devolvem nada são procedimentos, não tem retorno.


function calcularJuros(){

}

function main (){
    console.log('Programa principal');
    calcularJuros();
}
main ();

ele vai processar, a função vai se tornar uma variável e depois eu posso invocar ela.

Trecho de código de responsabilidade única, vamos isolar ele em funções, para diminuir a 
complexidade do código e ficar mais legível.
Através do nome dela, eu consigo invocar ela, e ela se torna um variável.
Objeto do tipo função (são valores no JavaScript, posso manipulá-los como valores)

função imediatamente invocada: resolve a função dentro do parênteses
*/

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));