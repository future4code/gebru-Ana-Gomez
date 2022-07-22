import { Request, Response } from "express";
import { selectUsers } from "../data/queries/selectUser";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await selectUsers();

    if (users.length < 1) {
      res.statusCode = 404;
      throw new Error("Não foram encontrados usuários");
    }

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
