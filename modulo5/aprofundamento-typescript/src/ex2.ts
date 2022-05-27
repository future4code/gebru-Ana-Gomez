// Exercício 2

function obterEstatisticas(numeros) {
  const numerosOrdenados: string | number = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: number | any = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

// a) A entrada são numeros e saidas são estatisticas. O tipo de todos os parâmetros vão ser number

// b) As variáveis que compõem essa função são: numerosOrdenados (que recebe string ou number
// para ordenar os números), soma (number) e estatísticas (number ou any).

// c)

type amostraDeDados = {
  numeros: number;
  obterEstatisticas: number | string;
};
