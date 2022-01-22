import { CommentsAction, CommentsActionTypes } from "types/comments";
import { Dispatch } from "react";
import { getAllComments } from "utils/api";
import { IComments } from "types/comments";

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
