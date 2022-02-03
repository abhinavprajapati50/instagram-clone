import { useState } from "react";
import "./App.css";
import { Post } from "./Post";

function App() {
  const [post, setpost] = useState([
    {
      username: "Abhinav User",
      caption: " You can create a new album with the content just uploaded. You mustcreate an account or sign in to save this content into your account.",
      imageUrl: "https://i.ibb.co/R41bHVx/image.png"
    },
    {
      username: "Abhinav User",
      caption: " You can create a new album with the content just uploaded. You mustcreate an account or sign in to save this content into your account.",
      imageUrl: "https://i.ibb.co/R41bHVx/image.png"
    },
  ]);
  return (
    <div className="app">
      <div className="app_header">
        <img className="app_header-image" src="./instaname.png" alt="" />
      </div>
      <h1>ABHINAV</h1>

      {post.map((curdata => <Post
        username={curdata.username}
        caption={curdata.caption}
        imageUrl={curdata.imageUrl}
      />))}

      {/* Header */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default App;
