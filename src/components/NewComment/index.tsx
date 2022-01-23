import "./newComment.scss";

import MyInput from "components/UI/MyInput";

import { useTypedSelector } from "hooks/useTypedSelector";

import { useActions } from "hooks/useTypedAction";

const Comments: React.FC = () => {
  const { comments } = useTypedSelector((state) => state.comments);

  const { addNewComment } = useActions();

  const addNewPost = (text: string) => {
    const newPost = {
      userId: comments[0].userId,
      id: Date.now(),
      name: comments[0].name,
      body: text,
      date: +new Date() / 1000,
      avatar: comments[0].avatar,
      replies: [],
    };
    addNewComment(newPost);
  };

  return (
    <section className="newComment">
      <div className="newComment__form">
        <img
          className="newComment__picture"
          src={comments[0]?.avatar}
          alt="Avatar"
        />
        <div className="newComment__input">
          <MyInput fill="Send" sendInfo={addNewPost} />
        </div>
      </div>

      <hr className="newComment__separator" />
    </section>
  );
};

export default Comments;
