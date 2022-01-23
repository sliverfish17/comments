import { Dispatch } from "react";

import {
  getAllComments,
  sendNewComment,
  deleteChosenComment,
  editChosenComment,
  addNewReply,
} from "utils/api";

import {
  IComments,
  CommentsAction,
  CommentsActionTypes,
  IReplies,
} from "types/comments";

export const defineComments = (comments: IComments[]) => ({
  type: "DEFINE_COMMENTS",
  payload: comments,
});

export const fetchComments =
  () => async (dispatch: Dispatch<CommentsAction>) => {
    try {
      const response = await getAllComments();
      if (!response) {
        throw new Error("Something went wrong!");
      }
      dispatch({
        type: CommentsActionTypes.DEFINE_COMMENTS,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addNewComment =
  (info: IComments) => async (dispatch: Dispatch<CommentsAction>) => {
    try {
      sendNewComment(info);
      dispatch({
        type: CommentsActionTypes.ADD_COMMENT,
        payload: info,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteComment =
  (id: number) => async (dispatch: Dispatch<CommentsAction>) => {
    try {
      deleteChosenComment(id);
      dispatch({
        type: CommentsActionTypes.DELETE_COMMENT,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const editComment =
  (id: number, info: IComments) =>
  async (dispatch: Dispatch<CommentsAction>) => {
    try {
      await editChosenComment(id, info);
      fetchComments()(dispatch);
    } catch (error) {
      console.log(error);
    }
  };

export const addReply =
  (id: number, info: IReplies) =>
  async (dispatch: Dispatch<CommentsAction>) => {
    try {
      await addNewReply(info);
      dispatch({
        type: CommentsActionTypes.ADD_REPLY,
        payload: info,
      });
      fetchComments()(dispatch);
    } catch (error) {
      console.log(error);
    }
  };
