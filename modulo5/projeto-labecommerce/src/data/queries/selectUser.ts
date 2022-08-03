import { User } from "../../types";
import { conections } from "../conections";

export const selectUsers = async (): Promise<User[]> => {
  const users = await conections("labecommerce_users").select(
    "labecommerce_users.id",
    "labecommerce_users.name",
    "labecommerce_users.email"
  );

  return users;
};

export const getUserByEmail = async (email: string): Promise<User[]> => {
  const [user] = await conections("labecommerce_users").where({ email: email });

  return user;
};

export const getUserById = async (userId: string): Promise<User> => {
  const user = await conections("labecommerce_users").where({ id: userId });

  return user[0];
};
