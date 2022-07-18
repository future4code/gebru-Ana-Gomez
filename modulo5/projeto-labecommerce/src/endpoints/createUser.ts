import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { User } from "../types";
import { insertUser } from "../data/queries/insertUser";
import { getUserByEmail } from "../data/queries/selectUser";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 400;
      throw new Error("'name', 'email' e 'password' são parâmetros obrigatórios");
    }

    const user = await getUserByEmail(email);

    if (user) {
      res.statusCode = 409;
      throw new Error("Esse email já esta cadastrado");
    }

    if (!email.includes("@") || !email.includes(".com")) {
      res.statusCode = 401;
      throw new Error("O campo do email deve conter um '@' e '.com'");
    }

    if (password.length < 6) {
      res.statusCode = 401;
      throw new Error("A senha deve conter no mínimo seis caracteres");
    }

    const newUser: User = {
      id: uuid(),
      name,
      email,
      password,
    };

    await insertUser(newUser);

    res.status(201).send("Usuário criado com sucesso");
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
