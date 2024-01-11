import { post, author, text } from "../Styles/Post.module.css";

const names = ["Lola", "Cuco"];

function Post({ postAuthor, body }) {
  return (
    <li className={post}>
      <p className={author}>{postAuthor}</p>
      <p className={text}>{body}</p>
    </li>
  );
}

export default Post;
