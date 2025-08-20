import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackForm() {
  const { feedback, setFeedback } = useContext(FeedbackContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!feedback.name || !feedback.email || !feedback.rating) {
      alert("Please fill all required fields (Name, Email, Rating).");
      return;
    }

    navigate("/summary");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <label>
        Name: <br />
        <input
          type="text"
          name="name"
          value={feedback.name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email: <br />
        <input
          type="email"
          name="email"
          value={feedback.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Rating: <br />
        <select
          name="rating"
          value={feedback.rating}
          onChange={handleChange}
        >
          <option value="">Select rating</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
      </label>
      <br />

      <label>
        Comments: <br />
        <textarea
          name="comments"
          value={feedback.comments}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
