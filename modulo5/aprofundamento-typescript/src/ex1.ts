// Exercício 1

// a)
let minhaString: string;
minhaString = "ana";
// minhaString = 20

// Nesse caso vemos que dá um erro ao atribuir um valor do tipo number à variável minhaString, pelo fato
// de essa variável só aceitar valores do tipo string.

// b)
let meuNumero: number | string;
meuNumero = 20;
meuNumero = "ana";

// No typescript usamos o Union Type para atribuirmos mais de um valor para uma variável. É o exemplo
// que vemos acima.

// c) e d)
enum corArcoIris {
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  AZULESCURO = "azul-escuro",
  VIOLETA = "violeta",
}

type Person = {
  nome: string;
  idade: number;
  corFavorita: corArcoIris;
};

const Person1: Person = {
  nome: "Ana",
  idade: 22,
  corFavorita: corArcoIris.VERMELHO,
};

const Person2: Person = {
  nome: "Clotilde",
  idade: 65,
  corFavorita: corArcoIris.VERDE,
};

const Person3: Person = {
  nome: "Raimundo",
  idade: 48,
  corFavorita: corArcoIris.AZUL,
};
