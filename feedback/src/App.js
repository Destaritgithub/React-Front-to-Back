import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import feedbackData from './data/feedbackData';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <Router>
      <Header text='Feedback UI' />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStatus feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <AboutLink />
    </Router>
  );
}
export default App;
