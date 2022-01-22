import { useTypedSelector } from "hooks/useTypedSelector";
import React from "react";

const CommentList: React.FC = () => {
  const { comments } = useTypedSelector((state) => state.comments);

  return (
    <div>
      {comments.map((comment) => (
        <h1>{comment.replies?.map((reply) => reply.name)}</h1>
      ))}
    </div>
  );
};

export default CommentList;
