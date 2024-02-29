// Switch case 
// primeiro exercicio

// let primeiroNumero = Number(prompt("Digite o primeiro número"))
// let segundoNumero = Number(prompt("Digite o segundo número"))
// let operacao = prompt("Qual operação você deseja realizar? (adicao , subtracao , divisao , multiplicacao)")

// switch(operacao){
//   case "adicao" : 
//         console.log(primeiroNumero + segundoNumero)
//         break;
//   case "subtracao" :
//         console.log(primeiroNumero - segundoNumero);
//         break;
//   case "divisao":
//         console.log(primeiroNumero / segundoNumero);
//         break;
//   case "multiplicacao":
//         console.log(primeiroNumero * segundoNumero);
// }

//segundo exercicio

let tipoGasolina = prompt("Você deseja gasolina , alcool, ou calibrar os pneus ?")

switch(tipoGasolina){
    case "gasolina" :
        let calculoGasolina = Number (prompt("Quanto deseja ? (digitar o valor em números) "))
            console.log("Você abasteceu " + calculoGasolina / 5 + " litros")
        break;
    case "alcool":
        let calculoAlcool =  Number (prompt("Quanto deseja ? (digitar o valor em números) "))
            console.log("Você abasteceu " + calculoAlcool / 5 + " litros")
            break;
    case "calibrar os pneus":
        console.log("Pneus calibrados com sucesso!")
}