import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';
const ContextFeedback = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this item is from context',
      rating: 4,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  // updating feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  return (
    <ContextFeedback.Provider
      value={{
        feedbackEdit,
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </ContextFeedback.Provider>
  );
};
export default ContextFeedback;
