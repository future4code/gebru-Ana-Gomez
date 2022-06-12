import { Dados, dadosBanco } from "./dados";

export const FormataCPF = (
  CPF: string,
  dadosBanco: Dados[]
): Dados | undefined => {
  const result = dadosBanco.find((dados) => dados.CPF === CPF);
  return result;
};
