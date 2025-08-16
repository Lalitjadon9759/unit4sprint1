import React, { useState, useEffect, useCallback } from "react";
import Post from "./Post";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Add new post (memoized)
  const addPost = useCallback(() => {
    if (!title || !body) return;
    setPosts((prev) => [
      ...prev,
      { id: Date.now(), title, body, verifyPost: false }
    ]);
    setTitle("");
    setBody("");
  }, [title, body]);

  // Toggle verify status (memoized)
  const toggleVerify = useCallback((id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>⏱ Timer: {timer}</h1>

      <input
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Enter Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>

      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} toggleVerify={toggleVerify} />
        ))}
      </div>
    </div>
  );
}
