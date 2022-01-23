import { memo, useState } from "react";

import "./comment.scss";

import Reply from "components/Reply";
import MyInput from "components/UI/MyInput";

import { useActions } from "hooks/useTypedAction";
import { useTypedSelector } from "hooks/useTypedSelector";

import { transformDate } from "utils/date";

import { IComments } from "types/comments";

interface IComment {
  comment: IComments;
}

const Comment: React.FC<IComment> = ({ comment }) => {
  const { deleteComment, editComment, addReply } = useActions();

  const { user } = useTypedSelector((state) => state.user);

  const [toggleReply, setToggleReply] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);

  const replyHandler = () => {
    setToggleReply((prev) => !prev);
    setToggleEdit(false);
  };

  const editHandler = () => {
    setToggleEdit((prev) => !prev);
    setToggleReply(false);
  };

  const addNewReply = (text: string) => {
    if (user) {
      const newReply = {
        userId: user.userId,
        id: Date.now(),
        name: user.name,
        body: text,
        date: +new Date() / 1000,
        avatar: user.avatar,
        commentId: comment.id,
      };
      addReply(comment.id, newReply);
    }
  };

  const deleteCommentHandler = (id: number) => {
    deleteComment(id);
  };

  const editPost = (text: string) => {
    const updatedPost = {
      userId: comment.userId,
      id: comment.id,
      name: comment.name,
      body: text,
      date: +new Date() / 1000,
      avatar: comment.avatar,
      replies: comment.replies,
    };
    editComment(comment.id, updatedPost);
  };

  return (
    <article className="comment">
      <img src={comment.avatar} className="comment__picture" alt="Avatar" />
      <div className="comment__content">
        <div className="comment__info">
          <h2 className="comment__name">{comment.name}</h2>
          <span className="comment__indicator">
            {comment.name === "Terry Bator" ? "(you)" : null}
          </span>
          <span className="comment__date">{transformDate(comment.date)}</span>
        </div>
        <span className="comment__filling">{comment.body}</span>
        <div className="comment__buttons">
          {comment.name === "Terry Bator" && (
            <button className="comment__option" onClick={editHandler}>
              Edit
            </button>
          )}
          {comment.name === "Terry Bator" && (
            <button
              className="comment__option"
              onClick={() => deleteCommentHandler(comment.id)}
            >
              Delete
            </button>
          )}
          <button className="comment__option" onClick={replyHandler}>
            Reply
          </button>
        </div>
        {toggleReply && (
          <div className="comment__reply">
            <div className="comment__heading">
              <span className="comment__option">to {comment.name}</span>
              <button
                className="comment__option"
                onClick={() => setToggleReply(false)}
              >
                Cancel
              </button>
            </div>
            <MyInput sendInfo={addNewReply} fill="Send" />
          </div>
        )}
        {toggleEdit && (
          <div className="comment__reply">
            <div className="comment__heading">
              <button
                className="comment__option"
                onClick={() => setToggleEdit(false)}
              >
                Cancel
              </button>
            </div>
            <MyInput body={comment.body} sendInfo={editPost} fill="Save" />
          </div>
        )}
        {comment.replies && (
          <div className="comment__replies">
            {comment.replies.map((reply) => (
              <Reply owner={comment.name} reply={reply} key={reply.id} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default memo(
  Comment,
  (prevState, newState) =>
    prevState.comment.body === newState.comment.body &&
    prevState.comment.replies?.length === newState.comment.replies?.length
);
