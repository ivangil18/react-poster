import { Link, Form, redirect } from "react-router-dom";

import { form, actions } from "../Styles/NewPost.module.css";
import Modal from "../components/Modal";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required name="body" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <div className={actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
