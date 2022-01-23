import "./index.scss";
import NewComment from "components/NewComment";
import { useEffect } from "react";
import { useActions } from "hooks/useTypedAction";
import CommentList from "components/CommentList";
import { getUserComment } from "utils/api";

function App() {
  const { fetchComments, defineUser } = useActions();

  useEffect(() => {
    fetchComments();
    (async () => {
      const userComment = await getUserComment();
      if (userComment && userComment[0]) {
        const user = {
          userId: userComment[0].userId,
          name: userComment[0].name,
          avatar: userComment[0].avatar,
        };
        defineUser(user);
      }
    })();
  }, []);

  return (
    <div className="app">
      <NewComment />
      <CommentList />
    </div>
  );
}

export default App;
