import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { form, actions } from "../Styles/NewPost.module.css";
import Modal from "../components/Modal";

function NewPost({ onNewPost }) {
  const [postBody, setPostBody] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const newPost = { author: author, body: postBody };
    onNewPost(newPost);
    navigate("..");
  }

  return (
    <Modal>
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
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  );
}

export default NewPost;
