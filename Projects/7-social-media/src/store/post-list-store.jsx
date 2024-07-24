import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi chicks, going to mumbai for honeymoon",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "mumbai", "honeymoon"],
  },
  {
    id: "2",
    title: "Pass ho gaye",
    body: "Ho gaye han pass , 4 saal ki masti k bahd b",
    reactions: 15,
    userId: "user-12",
    tags: ["graduating", "unbeleiveable"],
  },
];

export default PostListProvider;
