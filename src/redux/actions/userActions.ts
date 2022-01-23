import { IUser } from "types/user";

export const defineUser = (user: IUser) => ({
  type: "DEFINE_USER",
  payload: user,
});
