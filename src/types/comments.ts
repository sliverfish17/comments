export interface IComments {
  userId: number;
  avatar: string;
  body: string;
  date: number;
  id: number;
  name: string;
  replies?: IReplies[];
}

export interface IReplies {
  userId: number;
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
  ADD_COMMENT = "ADD_COMMENT",
  DELETE_COMMENT = "DELETE_COMMENT",
  EDIT_COMMENT = "EDIT_COMMENT",
  ADD_REPLY = "ADD_REPLY",
}

export interface IDefineComments {
  type: CommentsActionTypes.DEFINE_COMMENTS;
  payload: IComments[];
}

export interface IFetchComments {
  type: CommentsActionTypes.FETCH_COMMENTS;
}

export interface IAddComment {
  type: CommentsActionTypes.ADD_COMMENT;
  payload: IComments;
}

export interface IDeleteComment {
  type: CommentsActionTypes.DELETE_COMMENT;
  payload: number;
}

export interface IEditComment {
  type: CommentsActionTypes.EDIT_COMMENT;
  payload: IComments;
}

export interface INewReply {
  type: CommentsActionTypes.ADD_REPLY;
  payload: IReplies;
}

export type CommentsAction =
  | IDefineComments
  | IFetchComments
  | IAddComment
  | IDeleteComment
  | IEditComment
  | INewReply;
