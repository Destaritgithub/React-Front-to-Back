import { createContext, useState, useEffect } from 'react';
const ContextFeedback = createContext();
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  useEffect(() => {
    fetchFeedback();
  }, []);

  // fetching data from server json
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?'))
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  // updating feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <ContextFeedback.Provider
      value={{
        feedbackEdit,
        feedback,
        isLoading,
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
