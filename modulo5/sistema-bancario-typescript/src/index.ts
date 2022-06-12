import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Dados, dadosBanco, Operacao, Transacoes } from "./dados";
import { FormataCPF } from "./validaCPF"

const app: Express = express();
app.use(express.json());
app.use(cors());
const server = app.listen(3003, () => {
  if (server) {
    console.log("Servidor disponível e rodando");
  } else {
    console.error("Algo deu errado");
  }
});

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    res.status(200).send(dadosBanco);
  } catch (error: any) {
    if (errorCode === 400) {
      res.status(errorCode).send({ message: "Erro na requisição" });
    }
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
      const { nome, CPF, nascimento } = req.body;
  
      if (!nome || !CPF || !nascimento) {
        errorCode = 422;
        throw new Error("Informações insuficientes");
      }
  
      if (typeof nome !== "string" || nome.length < 3) {
        errorCode = 422;
        throw new Error("Nome inválido");
      }
  
      if (typeof nascimento !== "string") {
        throw new Error("Data de nascimento inválida");
      }
  
      if (typeof CPF !== "string") {
        errorCode = 409;
        throw new Error("CPF informado inválido");
      }

      const novoUsuario: Dados = {
        nome,
        CPF,
        nascimento,
        saldo: 0,
        extrato: [],
      };
  
      dadosBanco.push(novoUsuario);
  
      res.status(201).send(dadosBanco);
    }catch (error: any) {
        if (
          error.message ===
            "Data de nascimento inválida" ||
          error.message ===
            "CPF informado inválido" ||
          error.message ===
            "É necessário ter mais de 18 anos para abrir uma conta no LabeBank" ||
          error.message ===
            "Nome informado inválido"
        ) {
          res.status(422).send({ message: error.message });
        }
    
        if (errorCode === 400) {
          res.status(errorCode).send({ message: "Erro na requisição" });
        }
    
        res.status(errorCode).send({ message: error.message });
      }
    });

