import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import Feedbackitem from './Feedbackitem';
import ContextFeedback from '../context/ContextFeedback';

function FeedbackList() {
  const { feedback } = useContext(ContextFeedback);

  if (!feedback || feedback.length === 0) {
    return <p>no Feedback yet </p>;
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedbackitem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
