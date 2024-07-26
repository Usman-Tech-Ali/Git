import "./App.css";
import CreatePost from "../components/CreatePost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}></SideBar>
        <div className="content">
          <Header></Header>
          {/* {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )} */}
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
