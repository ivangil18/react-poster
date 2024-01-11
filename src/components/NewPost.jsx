import { useState } from "react";
import { form, actions } from "../Styles/NewPost.module.css";

function NewPost({ onNewPost, onCancel }) {
  const [postBody, setPostBody] = useState("");
  const [author, setAuthor] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const newPost = { author: author, body: postBody };
    onNewPost(newPost);
    onCancel();
  }

  return (
    <form className={form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value, 1)}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value, 1)}
        />
      </p>
      <div className={actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
