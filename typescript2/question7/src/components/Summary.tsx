import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import { Link } from "react-router-dom";

function Summary() {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div>
      <h2>Feedback Summary</h2>
      <p><b>Name:</b> {feedback.name}</p>
      <p><b>Email:</b> {feedback.email}</p>
      <p><b>Rating:</b> {feedback.rating}</p>
      <p><b>Comments:</b> {feedback.comments}</p>

      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Summary;
