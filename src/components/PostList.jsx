import { useEffect, useState } from "react";
import { posts } from "../Styles/PostList.module.css";

import Post from "./Post";

function PostList() {
  const [postsData, setPostsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addPostHandler(newPost) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    });

    setPostsData((existingPosts) => [newPost, ...existingPosts]);
  }

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      console.log(data);
      setPostsData(data.posts);
      setIsLoading(false);
    }
    getPosts();
    setIsLoading(true);
  }, []);

  if (isLoading) return <p style={{ textAlign: "center" }}>Post loading...</p>;

  return (
    <>
      {(postsData.length > 0) & !isLoading ? (
        <ul className={posts}>
          {postsData.map((p) => (
            <Post postAuthor={p.author} body={p.body} key={p.id} />
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
