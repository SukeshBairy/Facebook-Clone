import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          profilePic={post.data.profilePic}
          message={post.data.message}
          image={post.data.image}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
