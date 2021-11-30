//Exercício de Interpretação de Código
// 1 - a) "Matheus Nachtergaele" 
// "Virgínia Cavendish"
// canal: "Globo", horario: "14h"

/* 2 - a) cachorro       gato                   tartaruga
	nome: "Juca"         nome: "Juba"           nome: "Jubo"
	idade: 3             idade: 3               idade: 3
	raca: "SRD"          raca: "SRD"            raca: "SRD"
	*/
// b) A sintaxe de três pontos antes do nome de um objeto serve para fazermos uma cópia do objeto

// 3 - a) Será impresso "false" e "undefined"
// b) O primeiro deu "false", pois usamos colchetes para acessar a propriedade do objeto. Já no caso do "undefined", deu esse valor porque não declaramos nenhuma variável chamada "altura" e não colocamos nenhum valor também.

//Exercício de Escrita de Código
// 1 - a)
/*const nomeApelido = {
    nome: "Ana",
    apelidos: ["Aninha, Nana, Naflavia"]
    
};
const entradaFuncao = (nomeApelido) =>{

    console.log(`Eu sou ${nomeApelido.nome}, mas pode me chamar de: ${nomeApelido.apelidos}`);
}
entradaFuncao(nomeApelido)*/
//b)
/*const novoApelido = {...nomeApelido, apelidos: ["Naninha, Pepino, Nafla"]}

entradaFuncao(novoApelido)
*/

// 2 - a)
/*const pessoa1 = {
    nome: "Ana",
    idade: 22,
    profissao: "estudante"
}

const pessoa2 = {
    nome: "Flávia",
    idade: 23,
    profissao: "atleta"
}

//b) 
const array1 = []
const array2 = []
const dadosPessoa = (pessoa1, pessoa2) =>{

      array1.push([pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length])
      array2.push([pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length])
      const array3 = [array1, array2]
      return array3
}
console.log(dadosPessoa(pessoa1, pessoa2))
*/
// 3 - a)
//const carrinho = []

// b)
/*const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "Melancia",
    disponibilidade: true
}
const fruta3 = {
    nome: "Maracujá",
    disponibilidade: true
}*/

// c)
/*const colocarCarrinho = (fruta) =>{
  return  carrinho.push(fruta)
}
colocarCarrinho(fruta1)
colocarCarrinho(fruta2)
colocarCarrinho(fruta3)*/

// d) console.log(carrinho)

// Desafios
// 1 - 
const dadosUsuario = () =>{
    const nome = prompt("Qual o seu nome?")
    const idade = Number (prompt("Quantos anos você tem?"))
    const profissao = prompt("Qual a sua profissão?")

     const respostas = {
           nomeUsuario: nome,
           idadeUsuario: idade,
           profissaoUsuario: profissao
}
console.log(respostas, typeof respostas)}
dadosUsuario()



// 2 -
/*const filme1 = {
    nome: "Inception",
    anolancamento: 2010
}
const filme2 = {
    nome: "Where the wild things are",
    anolancamento: 2009
}
const verificarFilme = (filme1, filme2) =>{
   return filme1 <= filme2
}
console.log(verificarFilme(`O primeiro filme foi lançado antes do segundo?`))
console.log(verificarFilme(`O primeiro filme foi lançado no mesmo ano do segundo?`))*/

// 3 - 
/*const controlarEstoque = (fruta1) =>{
  return !fruta1.disponibilidade
}
console.log(controlarEstoque(fruta1))*/