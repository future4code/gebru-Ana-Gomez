// Exercício 2

const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const functionMath = () => {
  if (operacao === "add") {
    return `A resposta é: ${num1 + num2}`;
  } else if (operacao === "sub") {
    return `A resposta é: ${num1 - num2}`;
  } else if (operacao === "mult") {
    return `A resposta é: ${num1 * num2}`;
  } else if (operacao === "div") {
    return `A resposta é: ${num1 / num2}`;
  } else {
    return console.log(`Algo deu errado!`);
  }
};

console.log(functionMath());
