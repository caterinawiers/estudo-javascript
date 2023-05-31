/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos de nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (isso é um método) 
(IMC = peso / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70Kg de peso e 1.75 de altura e peça ao
José para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
//método é dentro da classe definida. toda pessoa que eu instanciar, ela terá essa
//capacidade definida. Dentro dos parewnteses depois de calcularImc seria algo
//externo à pessoa
calcularImc(){
    return this.peso / (Math.pow(altura,2));
}
classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5){
        return('abaixo do peso');
    }else if (imc >= 18.5 && imc <= 25){
        return('peso normal');
    }else if (imc >= 25 && imc < 30){
        return('acima do peso');
    }else if (imc >= 30 && imc <40){
        return('obeso');
    }else {
        return('obesidade grave');
    }
}
} 

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularImc());
const vitor = new Pessoa('Vitor', 60, 1.60);
console.log(vitor.classificarImc());

//classifique seu IMC (criei um método)

