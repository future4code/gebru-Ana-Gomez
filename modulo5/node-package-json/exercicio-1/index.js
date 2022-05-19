// Exercício 1
// a) Para acessar os parâmetros passados na linha de comando para o Node usamos
// process.argv e a posição do parâmetro dentro do array. Por ex: [2], [3].

// b)
const nome = process.argv[2];
const idade = Number(process.argv[3]);

// c)
const somaIdade = Number(process.argv[4]);

console.log(
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${
    idade + somaIdade
  }`
);
