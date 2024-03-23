/*
Faça um algoritmo que leia dois valores inteiros A e B,
se os valores de A e B forem iguais, deverá somar os dois valores,
caso contrário devera multiplicar A por B. Ao final de qualquer um 
dos cálculos deve-se atribuir o resultado a uma variável C e
imprimir seu valor na tela. 
 */

let num1 = 10
let num2 = 11

if (num1 == num2){
    let c = num1 + num2
    console.log(`A soma dos dois valores é igual á ${c}`)
} else {
    let c = num1 * num2
    console.log(`A multiplicação dos dois valores é igual a ${c}`)
}