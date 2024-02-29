// primeiro exercícío condicionais 

// let fome = prompt('Você está com fome ? (responder com "sim", ou "não")');
// let dinheiro = prompt('Você tem dinheiro ? (responder com "sim", ou "não")');
// let abertura = prompt('O restaurante está aberto ? (responder com "sim", ou "não")');

// if(fome === "não" || dinheiro === "não"){
//     console.log('Hoje a janta será em casa');   
// }else if (fome === "sim" && dinheiro === "sim" ){
//     console.log("hoje o jantar será no seu restaurante preferido!")
// }else {
//     console.log("Peça um delivery")
// }
// Segundo exercício condicionais 

let nomeUsuario = prompt("Qual o seu nome ? ");
let idadeUsario = Number(prompt("Qual a sua idade? "));
let carteiraUsuario = prompt("Você tem carteira de motorista? (responder com 'sim' ou 'não')");
let carroUsuario = prompt("Você tem um carro? (responder com 'sim' ou 'não')");

if(idadeUsario < 18 || carteiraUsuario === "não"){
    console.log(nomeUsuario + ", Você não pode dirigir")
} else if(idadeUsario >=18 && carteiraUsuario === "sim" && carroUsuario === "não"){
    console.log(nomeUsuario + ",  Você pode dirigir mas não tem carro")
}else{
    console.log(nomeUsuario + ", você será o motorista! ")
}