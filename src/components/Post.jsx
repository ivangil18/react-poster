import { post, author, text } from "../Styles/Post.module.css";
import { Link } from "react-router-dom";

function Post({ id, postAuthor, body }) {
  return (
    <li className={post}>
      <Link to={id}>
        <p className={author}>{postAuthor}</p>
        <p className={text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
