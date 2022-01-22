import "./index.scss";
import Comment from "components/Comment";
import { useEffect } from "react";
import { useActions } from "hooks/useTypedAction";
import CommentList from "components/CommentList";

function App() {
  const { fetchComments } = useActions();

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="app">
      <Comment />
      <CommentList />
    </div>
  );
}

export default App;
