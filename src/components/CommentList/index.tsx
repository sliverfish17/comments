import { useTypedSelector } from "hooks/useTypedSelector";

import Comment from "components/Comment";

import "./commentList.scss";

const CommentList: React.FC = () => {
  const { comments } = useTypedSelector((state) => state.comments);

  return (
    <>
      <section className="commentList">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </section>
    </>
  );
};

export default CommentList;
