import { Product } from "../../types";
import { conections } from "../conections";

export const insertProduct = async (product: Product): Promise<void> => {
  await conections("labecommerce_products").insert({
    id: product.id,
    name: product.name,
    price: product.price,
    image_url: product.imageUrl,
  });
};
