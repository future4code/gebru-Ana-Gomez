type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Para transpilar para Javascript, eu executaria o comando tsc seguido do nome do arquivo, no caso
// "tsc ex4.ts"

// c) Provavelmente seria diferente sim, pois teríamos que indicar o caminho do arquivo

// d) Usando o comando tsc sozinho, podemos transpilar todos os arquivos que contenham .ts 
// Também podemos rodar o comando tsc e colocar o nome dos arquivos seguidos de espaço. Por ex:
// tsc ex1.ts ex2.ts ex3.ts