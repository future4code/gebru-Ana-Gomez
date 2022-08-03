import { User } from "../../types";
import { conections } from "../conections";

export const insertUser = async (user: User): Promise<void> => {
  await conections("labecommerce_users").insert(user);
};
