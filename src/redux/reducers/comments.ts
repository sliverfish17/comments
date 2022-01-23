import { CommentsAction, CommentsActionTypes, IComments } from "types/comments";

interface IInitialState {
  comments: IComments[];
  isLoading: boolean;
}

const initialState: IInitialState = {
  comments: [],
  isLoading: true,
};

const commentsReducer = (
  state = initialState,
  action: CommentsAction
): IInitialState => {
  switch (action.type) {
    case CommentsActionTypes.DEFINE_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isLoading: false,
      };
    case CommentsActionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case CommentsActionTypes.DELETE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter((comment) => comment.id !== action.payload),
        ],
      };
    case CommentsActionTypes.EDIT_COMMENT:
      return {
        ...state,
      };
    case CommentsActionTypes.ADD_REPLY:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default commentsReducer;
