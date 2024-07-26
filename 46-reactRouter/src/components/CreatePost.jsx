import React, { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { useRef } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();//no need

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const reactionsInput = reactionsElement.current.value; // Assuming input like "5 likes 3 dislikes"
  //   const tags = tagsElement.current.value.split(" ");

  //   // Parse reactions input
  //   const reactionsParts = reactionsInput.split(" "); // ["5", "likes", "3", "dislikes"]
  //   const reactions = {
  //     likes: parseInt(reactionsParts[0], 10),
  //     dislikes: parseInt(reactionsParts[2], 10),
  //   };

  // if (
  //   userId !== "" &&
  //   postTitle !== "" &&
  //   postBody !== "" &&
  //   reactionsInput !== "" && // Ensure reactions input is not empty
  //   tags.length > 0 // Ensure there's at least one tag
  // ) {
  //   alert(`Post created successfully`);

  //   // Reset form fields
  //   userIdElement.current.value = "";
  //   postTitleElement.current.value = "";
  //   postBodyElement.current.value = "";
  //   reactionsElement.current.value = "";
  //   tagsElement.current.value = "";

  //   // addPost(userId, postTitle, postBody, reactions, tags);
  // } else {
  //   alert("Please fill all the fields");
  // }

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user ID
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your Id ..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          placeholder="How r u feeling ..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell us more about it ..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          name="reactions"
          id="reactions"
          placeholder="5 likes and 10 dislikes ..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Tags
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="Please enter your tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();

  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData), // Fixed body to be a JSON string
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
