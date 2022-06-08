import express, { response } from "express";
import { Request, Response } from "express";
import { products } from "./data";

import { AddressInfo } from "net";
import { request } from "http";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Exercício 1
app.get("/test", (req: Request, res: Response) => {
  let codigoErro: number;

  try {
    res.send("Servidor funcionando");
  } catch {
    res.status(401).end("Algo deu errado");
  }
});

// Exercício 2 > data.ts

// Exercício 3
app.post("/create", (req: Request, res: Response) => {
  try {
    const { id, name, price } = req.body;
    products.push({ id, name, price });
    res.send(products);
  } catch (error) {
    res.status(400).end("Algo deu errado");
  }
});

// Exercício 4
app.get("/products", (req: Request, res: Response) => {
  try {
    res.send(products);
  } catch (error) {
    res.status(400).end("Algo deu errado");
  }
});

// Exercício 5
app.put("/edit/product", (req: Request, res: Response) => {
  try {
    const { id, price } = req.body;
    products
      .filter((p) => {
        if (id === p.id) {
          p;
        }
      })
      .map((p) => {
        p.price = price;
      });

    res.send(products);
  } catch (error) {
    res.status(400).end("Algo deu errado");
  }
});

// Exercício 6
app.delete("/delete/product", (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const indexProduct = products.findIndex((p) => {
      if (id === p.id) {
        return p;
      }
    });
    products.splice(indexProduct, 1);

    res.send(products);
  } catch (error) {
    res.status(400).end("Algo deu errado");
  }
});

// Exercício 7

// Exercício 8

// Exercício 9