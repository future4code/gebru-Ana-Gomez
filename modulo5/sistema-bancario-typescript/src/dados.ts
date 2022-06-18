export type Dados = {
  nome: string;
  CPF: string;
  nascimento: string;
  saldo: number;
  extrato: Transacoes[];
};

export enum Operacao {
  DEPOSITO = "Depósito em dinheiro",
  PAGAMENTO = "Pagamento de conta",
  TRANSFERENCIAP = "Transferencia paga",
  TRANSFERENCIAR = "Transferência recebida",
}

export type Transacoes = {
  valor: number;
  data: string;
  descricao: Operacao;
};

export const dadosBanco: Dados[] = [
  {
    nome: "Glaucio",
    nascimento: "15/05/2000",
    CPF: "123-456-789-10",
    saldo: 0.1,
    extrato: [
      {
        valor: 1000,
        data: "30/02/2022",
        descricao: Operacao.TRANSFERENCIAR,
      },
    ],
  },
];
