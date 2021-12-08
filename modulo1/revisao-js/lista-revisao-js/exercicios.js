// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compareNumbers(a, b) {
        return a - b
    }
    return array.sort(compareNumbers)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let evenNumbers = array.filter(even => (even % 2) === 0)
    return evenNumbers
 }


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let evenNumbers = array.filter(even => (even % 2) === 0)
    let square = evenNumbers.map(function(item){
             return Math.pow(item, 2)
    })
    return square
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
const max = Math.max(...array)

    return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let biggerNumber 
    let smallerNumber 

    if (num1 > num2){
        biggerNumber = num1
        smallerNumber = num2
        } else{
        biggerNumber = num2
        smallerNumber = num1
}
let split = biggerNumber % smallerNumber === 0

const objectNumbers = {
    maiorNumero: biggerNumber,
    maiorDivisivelPorMenor: split,
    diferenca: (biggerNumber - smallerNumber)
}
return objectNumbers
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPairs = [] 
    for (i = 0; arrayPairs.length < n; i++) {
     if (i % 2 === 0) { 
    arrayPairs.push(i)
     } 
    } 
    return arrayPairs
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let type
    if (ladoA === ladoB && ladoB === ladoC) {
    type = 'Equilátero' 

   } else if ((ladoA === ladoB && ladoB !== ladoC) || (ladoA === ladoC && ladoC !== ladoB) || (ladoB === ladoC && ladoB !== ladoA)) 
   { type = 'Isósceles'

    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) 
    { type = 'Escaleno' 

   } return type
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}