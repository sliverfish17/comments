import "./newComment.scss";

import MyInput from "components/UI/MyInput";

import { useTypedSelector } from "hooks/useTypedSelector";

import { useActions } from "hooks/useTypedAction";

const Comments: React.FC = () => {
  const { user } = useTypedSelector((state) => state.user);

  const { addNewComment } = useActions();

  const addNewPost = (text: string) => {
    if (user) {
      const newPost = {
        userId: user.userId,
        id: Date.now(),
        name: user.name,
        body: text,
        date: +new Date() / 1000,
        avatar: user.avatar,
        replies: [],
      };
      addNewComment(newPost);
    }
  };
  return (
    <section className="newComment">
      {user && (
        <>
          <div className="newComment__form">
            <img
              className="newComment__picture"
              src={user?.avatar}
              alt="Avatar"
            />
            <div className="newComment__input">
              <MyInput fill="Send" sendInfo={addNewPost} />
            </div>
          </div>

          <hr className="newComment__separator" />
        </>
      )}
    </section>
  );
};

export default Comments;
