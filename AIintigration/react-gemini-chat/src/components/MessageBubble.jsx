

export default function MessageBubble({ role, text, timestamp }) {
  return (
    <div className={`bubble ${role}`}>
      <p>{text}</p>
      <span className="timestamp">
        {new Date(timestamp).toLocaleTimeString()}
      </span>
    </div>
  );
}
