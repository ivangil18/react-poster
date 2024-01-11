import { useLoaderData } from "react-router-dom";

import { posts } from "../Styles/PostList.module.css";

import Post from "./Post";

function PostList() {
  const postsData = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className={posts}>
          {postsData.map((p) => (
            <Post id={p.id} postAuthor={p.author} body={p.body} key={p.id} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>No post have been registered yet</h2>
          <p>Start by adding a new post</p>
        </div>
      )}
    </>
  );
}

export default PostList;
