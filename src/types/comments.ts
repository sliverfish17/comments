export interface IComments {
  avatar: string;
  body: string;
  date: number;
  id: number;
  name: string;
  replies?: IReplies[];
}

export interface IReplies {
  avatar: string;
  body: string;
  date: number;
  id: number;
  commentId: number;
  name: string;
}

export enum CommentsActionTypes {
  DEFINE_COMMENTS = "DEFINE_COMMENTS",
  FETCH_COMMENTS = "FETCH_COMMENTS",
  SET_COUNTRY_LOADING = "SET_COUNTRY_LOADING",
}

export interface IDefineComments {
  type: CommentsActionTypes.DEFINE_COMMENTS;
  payload: IComments[];
}

export interface IFetchComments {
  type: CommentsActionTypes.FETCH_COMMENTS;
}

export type CommentsAction = IDefineComments | IFetchComments;
