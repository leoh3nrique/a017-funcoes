// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado
//FOI USADO AS DUAS VARIAVEIS PARA O EXERCICIO INTEIRO 
let primeroNumero = Number(prompt("Digite o primeiro número"))  
let segundoNumero = Number(prompt("Digite o segundo número"))

const somaDosNumeros = (num1, num2) => {
    let soma = num1 + num2
    console.log(`A soma de ${num1} e ${num2} é igual a ${soma}`)
}


somaDosNumeros(primeroNumero, segundoNumero)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

console.log("O primeiro número é maior ou igual ao segundo?")
const maiorOuIgual = (num1, num2) => {
    if (num1 >= num2){
        console.log(true)
    }else{
        console.log(false)
    }
}

maiorOuIgual(primeroNumero, segundoNumero) 

// c) Uma função que receba um número e imprima se ele é par ou não

const ePar = (num1) =>{
    if (num1 % 2 === 0 ){
        console.log(`O numero ${num1} é par`)
    }else{
        console.log(`O numero ${num1} é impar`)
    }
}

ePar(primeroNumero)
ePar(segundoNumero)

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

let perguntaString = prompt("Digite um palavra para imprimir um resultado")

const stringELetraMaiuscula = (string) =>{
    console.log(string.toUpperCase())
    console.log(perguntaString.length,"caracteres")
    
}

stringELetraMaiuscula(perguntaString)
