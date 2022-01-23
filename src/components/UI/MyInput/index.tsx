import { useState } from "react";
import "./myInput.scss";

interface IMyInput {
  sendInfo: (text: string) => void;
  fill: string;
  body?: string;
}

const MyInput: React.FC<IMyInput> = ({ sendInfo, fill, body = "" }) => {
  const [text, setText] = useState(body);
  return (
    <>
      <textarea
        className="myInput__message"
        placeholder="Your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="myInput__btn"
        onClick={() => {
          sendInfo(text);
          setText("");
        }}
      >
        {fill}
      </button>
    </>
  );
};

export default MyInput;
