const soma = (num1, num2) => {
    console.log(`A soma dos numeros ${num1} e ${num2} é ${num1 + num2}`)
}
const subtracao = (num1, num2) => {
    console.log(`A subtracao dos numeros ${num1} e ${num2} é ${num1 - num2}`)
}
const multiplicacao = (num1, num2) => {
    console.log(`A multiplicacao dos numeros ${num1} e ${num2} é ${num1 * num2}`)
}
const divisao = (num1, num2) => {
    console.log(`A divisao dos numeros ${num1} e ${num2} é ${(num1 / num2)}`)
}

let num1 = Number(prompt("Digite um numero para saber o resultado das suas contas:"))
let num2 = Number(prompt(`Além do ${num1}, digite outro número:`))

soma(num1,num2)

subtracao(num1,num2)

multiplicacao(num1,num2)

divisao(num1,num2)
