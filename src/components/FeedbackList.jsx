import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          ); // Better to pass full item instead of indivisual keys of item
        })}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => {
  //       return (
  //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       ); // Better to pass full item instead of indivisual keys of item
  //     })}
  //   </div>
  // );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
