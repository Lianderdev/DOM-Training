/*
 Faça um algoritmo que receba um número inteiro e imprima na tela o 
 seu antecessor e o seu sucessor.
  */

 let numInteiro = 10

 if (Number.isInteger(numInteiro)) {
    let sucessor = numInteiro + 1
    let antecessor = numInteiro -1
    console.log(`Número ${numInteiro}, Sucessor ${sucessor}, Antecessor ${antecessor}`)
 } else {
    console.log(`Insira um valor inteiro pfv!`)
 }