// dia 9 Lista de Exercicios  Switch Case + Loop + IF/ELSE

// ex1

let nome = prompt("Insira seu nome:")
let idade =  parseInt(prompt("Digite sua idade: "))
let peso = (prompt('Digite seu peso:'))
let altura = (prompt('Digite sua altura:'))
let profissao = prompt('Qual sua profissão?:')

console.log("Olá " + nome + " você tem " + idade + " anos " + " é " + profissao + "," + " tem " + altura + "m" + " de altura, e pesa " + peso + "kg");

if(idade >= 18){
     console.log("Está liberado para tomar umas geladas!")
}else{
    console.log("Sem gelada para você!")
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas )
console.log("Sua idade em  dias é: " + dias )  

let imc = peso / (altura * altura)

if(imc <= 18,5){
    console.log("Seu imc é " + imc + " seu imc indica magreza! " )
}else if (imc > 18,5 && imc <= 24,9 ){
    console.log("Seu imc é " + imc + " você está no imc normal!")
}else if(imc > 24,9 && imc <= 30 ){
    console.log("Seu imc é " + imc + " você está em sobrepeso!")
}else{
    console.log("Você está em obesidade!")
}

let ano = 2024
let anoNascimento = ano - idade
console.log("Você nasceu no ano de " + anoNascimento)

let anoVivido = anoNascimento
let idadeAtual = 0

for(let anoVivido = anoNascimento; anoVivido <= ano; anoVivido++){
    console.log(anoVivido + " - " + idadeAtual + " anos de idade ")
    idadeAtual++
}



