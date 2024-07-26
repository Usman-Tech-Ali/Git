import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
  useReducer,
} from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchpostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        // addInitialPost([]); if it is empty then it shows welcome-msg
        setFetching(false);
      });

    return () => {
      console.log("Component vanishes");
      controller.abort;
    };
  }, []);

  // Using useCall back hook, now it depends on displatPostList and never do un-necessary re-painting

  /* const deletePost = useCallback(
    (postId) => {
      dispatchpostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchpostList]
  );*/

  // useMemo Hook
  /*const arr = [5, 3, 7, 1, 9];
  const sortedArr = arr.sort(); // but problem is that it do calculation every time when the component repaints

  const sortArr = useMemo(() => arr.sort(), [arr]); // now it do calculation only when arr changes not in every paint cycle*/

  return (
    <PostList.Provider
      value={{
        postList,
        fetching,
        addPost,
        deletePost,
      }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
