// Exercícios de Interpretação de Código
// 1 - a) Vai ser impresso primeiramente o elemento do array, seguido do índice, seguido do array inteiro.
// 2 - a) Vai ser impresso só os elementos "nome:" do array.
// 3 - a) Vai ser impresso só os elementos "apelido:" seguido do filtro diferente de "Chijo", portanto, "Chijo" não será incluso no console.

// Exercícios de Escrita de Código
// 1 - a)
/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]*/

/*const nomeDoguinhos = pets.map((item) => {
        return item.nome
 })
console.log(nomeDoguinhos)
// b) 
 const soDogSalsicha = pets.filter((item)=>{
        return item.raca === "Salsicha"
 })
 console.log(soDogSalsicha)*/

// c) 
/*pets
  .filter(item => item.raca === "Poodle")
  .map(item =>console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`))*/

// 2 - a)

/*const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]*/
/*const nomeProdutos = produtos.map((item)=>{
       return item.nome
})
console.log(nomeProdutos)*/

// b)
/*const descontoProdutos = produtos.map((item)=>{
       return {nome: item.nome, preco: (item.preco * 0.95).toFixed(2)}
})
console.log(descontoProdutos)*/

// c)
/*const soBebidas = produtos.filter((item)=>{
       return item.categoria === "Bebidas"
})
console.log(soBebidas)*/

// d)
/*const soYpe = produtos.filter((item)=>{
   return item.nome.includes("Ypê")
})
console.log(soYpe)*/

// e)
/*produtos
  .filter(item => item.nome.includes("Ypê"))
  .map(item =>console.log(`Compre ${item.nome} por ${item.preco}`))*/


// Desafios
// 1 - a)
/*const pokemons = [
       { nome: "Bulbasaur", tipo: "grama" },
       { nome: "Bellsprout", tipo: "grama" },
       { nome: "Charmander", tipo: "fogo" },
       { nome: "Vulpix", tipo: "fogo" },
       { nome: "Squirtle", tipo: "água" },
       { nome: "Psyduck", tipo: "água" },
    ]/*
// Jeito Difícil:
/*const ordemAlfabeticaPokemon =
   pokemons
           .sort((item1, item2)=>{
                  if (item1.nome < item2.nome){
                         return -1
                  }
                  else if (item1.nome > item2.nome){
                         return 1
                  } else{
                         return 0
                  }

           })
           .map(item => item.nome)
console.log(ordemAlfabeticaPokemon)*/

// Jeito Fácil:
/*const ordemAlfabeticaPokemon1 = pokemons.map((item)=>{
       return item.nome
})
console.log(ordemAlfabeticaPokemon1.sort())*/

// b)
/*const tiposUnicosPokemons = [...new Set(pokemons.map(item => item.tipo))];
console.log(tiposUnicosPokemons)*/






 

