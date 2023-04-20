import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import feedbackData from './data/feedbackData';


function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <>
      <Header text='Feedback UI' />
      <div>
        <FeedbackList feedback={feedback}/>
       
      </div>
    </>
  );
}
export default App;
