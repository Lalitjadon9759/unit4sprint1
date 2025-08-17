import React from "react";

const Post = ({ post, toggleVerify }) => {
  const backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;

  return (
    <div
      style={{
        backgroundColor,
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => toggleVerify(post.id)}>
        {post.verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
};

export default Post;
