import { Request, Response } from "express";
import { insertProduct } from "../data/queries/insertProducts";
import { getProductByName } from "../data/queries/selectProducts";
import { Product } from "../types";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, price, imageUrl } = req.body;
    if (!name || !price || !imageUrl) {
      res.statusCode = 400;
      throw new Error(
        "'name', 'price' e 'imageUrl' são parâmetros obrigatórios"
      );
    }
    const nameProduct = await getProductByName(name);

    if (nameProduct) {
      res.statusCode = 409;
      throw new Error("Esse produto já existe");
    }
    const product: Product = {
      id: name,
      price,
      imageUrl,
    };

    await insertProduct(product);

    res.status(201).send("Produto criado com sucesso");
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
