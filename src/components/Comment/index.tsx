import React, { useState } from "react";
import { IComments } from "types/comments";

const Comments: React.FC = () => {
  return (
    <section className="comment">
      <div className="comment__form">
        <img className="comment__picture" src="" alt="Picture Avatar" />
        <textarea
          className="comment__message"
          placeholder="Your message"
        ></textarea>
      </div>
      <button className="comment__btn">Send</button>
    </section>
  );
};

export default Comments;
