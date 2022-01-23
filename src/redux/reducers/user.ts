import { IUser, UserAction, UserActionTypes } from "types/user";

interface IInitialState {
  user: null | IUser;
  isLoading: boolean;
}

const initialState: IInitialState = {
  user: null,
  isLoading: true,
};

const commentsReducer = (
  state = initialState,
  action: UserAction
): IInitialState => {
  switch (action.type) {
    case UserActionTypes.DEFINE_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default commentsReducer;
