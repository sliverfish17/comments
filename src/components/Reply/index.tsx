import { memo } from "react";

import "./reply.scss";

import { IReplies } from "types/comments";

import { transformDate } from "utils/date";

interface IReply {
  reply: IReplies;
  owner: string;
}

const Reply: React.FC<IReply> = ({ reply, owner }) => {
  return (
    <div className="reply">
      <img src={reply.avatar} alt="Avatar" className="reply__picture" />
      <div className="reply__content">
        <div className="reply__info">
          <h2 className="reply__name">{reply.name}</h2>
          <span className="reply__details">to {owner}</span>
          <span className="reply__details">{transformDate(reply.date)}</span>
        </div>
        <p className="reply__body">{reply.body}</p>
      </div>
    </div>
  );
};

export default memo(
  Reply,
  (prevState, newState) => prevState.reply.id === newState.reply.id
);
