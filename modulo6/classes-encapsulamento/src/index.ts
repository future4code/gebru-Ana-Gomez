// Exercícios

// Exercício 1)
// a) O construtor é usado para executar ações ao criar uma instância de classe. Deve ser declarado com
// a função constructor e pode receber parâmetros que devem ser passados no momento de criar a instância
// Toda classe possui um constructor.

//b)
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

const usuario1 = new UserAccount("12345678", "ana", 23);

// Deu um erro de sintaxe e não consigo identificar o que é

//c) Conseguimos acessar os atributos privados através de métodos criados especificamente para isso
// chamados de getters
// Ex: pegarCPF = () :string => {
//    return this.cpf
//}

// Exercício 2)
class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
}

pegarData = ():string =>{
    return this.date
}

pegarValor = ():number{
    return this.value
}

pegarDescricao = ():string{
    return this.description
}
// Exercício 3)

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}

listaContas = (): any => {
  return this.accounts;
};
