import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import feedbackData from './data/feedbackData';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header text='Feedback UI' />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStatus feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
export default App;
