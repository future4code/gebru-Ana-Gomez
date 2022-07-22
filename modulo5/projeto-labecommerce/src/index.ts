import { app } from "./app";
import { createProduct } from "./endpoints/createProduct";
import { createPurchases } from "./endpoints/createPurchase";
import { createUser } from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPurchasesByUserId } from "./endpoints/getPurchasesByUserID";

app.get("/users", getAllUsers);

app.get("/users/:userId/purchases", getPurchasesByUserId);

app.post("/createuser", createUser);

app.get("/products", getAllProducts);

app.post("/createproducts", createProduct);

app.post("/purchases", createPurchases);
