import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { Purchase } from "../types";

import { getUserById } from "../data/queries/selectUser";
import { getProductById } from "../data/queries/selectProducts";
import { insertPurchasesByUser } from "../data/queries/insertPurchases";

export const createPurchases = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      res.statusCode = 400;
      throw new Error("'userId', 'productId' e 'quantity' são parâmetros obrigatórios");
    }

    const user = await getUserById(userId);

    if (!user) {
      res.statusCode = 404;
      throw new Error("Usuario não encontrado");
    }

    const product = await getProductById(productId);

    if (!product) {
      res.statusCode = 404;
      throw new Error("Produto não encontrado");
    }

    const totalPrice = product.price * quantity;

    const purchase: Purchase = {
      id: uuid(),
      userId,
      productId,
      quantity,
      totalPrice,
    };

    await insertPurchasesByUser(purchase);

    res.status(201).send("Parabéns! Compra realizada com sucesso");
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
