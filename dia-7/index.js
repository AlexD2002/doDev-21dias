// Explicação while e doWhile
 
// let condicao = true;

// while(condicao === true){
//   let idade = Number(prompt('Insira a sua idade'))
//     if(idade < 18 ){
//         console.log('Você é menor de idade')
//         condicao = false;
//     }
// }
// console.log('While finalizado')


//exercicio sobre medica escolar

let mediaGeral = 0;
let  quantidadeHomens = 0;
let quantidadeMulheres7 = 0;
let maiorNotaHomens = 0;
let contador = 1

while(contador <= 10){
    nota = parseInt(prompt('Digite a nota do ' + contador + "aluno"))
    sexo = prompt('Digite o sexo do aluno (H/M)')
    
        if(sexo == "H"){
            if (nota > maiorNotaHomens){
                maiorNotaHomens = nota
            }
            quantidadeHomens++
        }
        if(sexo = "M" && nota > 7 ){
            quantidadeMulheres7++
        }
        mediaGeral += nota
        contador++
}
mediaGeral = mediaGeral / 10

console.log('A media geral dos alunos foi: ' + mediaGeral )
console.log('A quantiadde de homens cadastrados foi: ' + quantidadeHomens)
console.log('A quantidade de mulheres com nota acima de 7 foi: ' + quantidadeMulheres7)
console.log('A maior nota entre os homens foi: ' + maiorNotaHomens)