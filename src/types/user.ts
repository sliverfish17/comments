export interface IUser {
  name: string;
  avatar: string;
  userId: number;
}

export enum UserActionTypes {
  DEFINE_USER = "DEFINE_USER",
}

export interface IDefineUser {
  type: UserActionTypes.DEFINE_USER;
  payload: IUser;
}

export type UserAction = IDefineUser;
