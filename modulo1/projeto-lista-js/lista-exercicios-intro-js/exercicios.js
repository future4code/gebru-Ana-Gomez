// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const alturaT = Number (prompt("Insira aqui um número"))
const larguraT = Number (prompt("Insira aqui outro número"))
const calculaAreaRetangulo = alturaT * larguraT

console.log(calculaAreaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number (prompt("Em qual ano estamos?"))
let anoNascimento = Number (prompt("Em qual ano você nasceu?"))
let imprimeIdade = anoAtual - anoNascimento

console.log(imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
//IMC = Peso ÷ (Altura × Altura)
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const NOME = prompt("Qual o seu nome de usuário?")
const IDADE = prompt("Qual é a sua idade?")
const EMAIL = prompt("Qual é o seu email?")

 console.log ("Meu nome é " + NOME + ", tenho " + IDADE + " anos, e o meu email é " + EMAIL + "." )
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite sua primeira cor favorita")
const cor2 = prompt("Digite sua segunda cor favorita")
const cor3 = prompt("Digite sua terceira cor favorita")
var imprimeTresCoresFavoritas = [cor1, cor2, cor3]
console.log(imprimeTresCoresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return calculaIngressosEspetaculo = custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1 >= string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return (array)[0]
}
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return retornaUltimoElemento = ((array)[(array).length - 1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
const ultimoElemento = array[array.length - 1] 
array[0] = ultimoElemento
array[array.length - 1] = primeiroElemento
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = prompt("Qual o ano atual?")
let anoNascimento = prompt("Em qual ano você nasceu?")
let anoEmissao = prompt("Em qual ano seu RG foi emitido?")
let idadeUsuario = anoAtual - anoNascimento
if (idadeUsuario <= 20){
   console.log((anoAtual - anoEmissao) >= 5)
}
else if (idadeUsuario >= 20 && idadeUsuario <= 50){
   console.log((anoAtual - anoEmissao) >= 10)
}
else if (idadeUsuario > 50){
   console.log((anoAtual - anoEmissao) > 15)
}
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
  return true
} else {
  return false
}
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let idadeAluno = prompt("Você tem mais de 18 anos?")
let ensinoMedio = prompt("Você possui ensino médio completo?")
let dispoHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
const validadeLabenu = idadeAluno === "sim" && ensinoMedio === "sim" && dispoHorario === "sim"
console.log(validadeLabenu)
}