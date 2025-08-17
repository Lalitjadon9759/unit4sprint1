
import React, { useState, useEffect } from "react";
import Post from "./Post";

const App = () => {
  const [time, setTime] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const addPost = () => {
    if (!title || !body) return;
    const newPost = {
      id: Date.now(),
      title,
      body,
      verifyPost: false,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  const toggleVerify = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Timer: {time}</h1>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>

      {posts.map((post) => (
        <Post key={post.id} post={post} toggleVerify={toggleVerify} />
      ))}
    </div>
  );
};

export default App;
