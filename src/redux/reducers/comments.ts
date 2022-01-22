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

    default:
      return state;
  }
};

export default commentsReducer;
