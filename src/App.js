import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPageIcon from "./components/AboutPageIcon";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you wanna delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    } //defined the function here, called from FeedbackItems.jsx
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <AboutPageIcon />
      </div>
    </Router>
  );
}

export default App;
