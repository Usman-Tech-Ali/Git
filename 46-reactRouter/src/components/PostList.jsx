import React from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  // const handleGetPostsClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //     });
  // };

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}

      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
