import * as CommentsActionCreators from "./commentsActions";
import * as UserActionCreators from "./userActions";

const exportedActions = {
  ...CommentsActionCreators,
  ...UserActionCreators,
};

export default exportedActions;
