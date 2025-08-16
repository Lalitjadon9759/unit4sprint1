import React, { useMemo } from "react";

function Post({ post, toggleVerify }) {
  const { id, title, body, verifyPost } = post;

  const bgColor = useMemo(
    () => `hsl(${Math.random() * 360}, 80%, 80%)`,
    []
  );

  console.log(`Rendering Post ID: ${id}`);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
      }}
    >
      <h2>{title}</h2>
      <p>{body}</p>
      <p>Status: {verifyPost ? "✅ Verified" : "❌ Not Verified"}</p>
      <button onClick={() => toggleVerify(id)}>
        {verifyPost ? "Unverify" : "Verify"}
      </button>
    </div>
  );
}
export default React.memo(Post);
