import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackForm from "./components/FeedbackForm";
import Summary from "./components/Summary";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
