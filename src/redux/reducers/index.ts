import { combineReducers } from "redux";

import commentsReducer from "./comments";

import userReducer from "./user";

export const rootReducer = combineReducers({
  comments: commentsReducer,
  user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
