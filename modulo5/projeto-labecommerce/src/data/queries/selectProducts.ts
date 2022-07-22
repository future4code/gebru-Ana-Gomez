import { Product } from "../../types";
import { conections } from "../conections";

export const selectProducts = async (): Promise<Product[]> => {
  const products = await conections("labecommerce_products").select(
    "labecommerce_products.id",
    "labecommerce_products.name",
    "labecommerce_products.price",
    "labecommerce_products.image_url"
  );

  return products;
};

export const getProductById = async (productId: string): Promise<Product> => {
  const product = await conections("labecommerce_products")
    .select(
      "labecommerce_products.name",
      "labecommerce_products.price",
      "labecommerce_products.image_url"
    )
    .where({ id: productId });

  return product[0];
};

export const getProductByName = async (name: string): Promise<string> => {
  const [nameProduct] = await conections("labecommerce_products").where({
    name: name,
  });

  return nameProduct;
};
