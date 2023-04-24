import { useState } from 'react';
import Card from './shared/Card';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const handleTextchange =() =>{
   setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className='input-group'>
          <input onChange={handleTextchange} type='text' placeholder='Write a review' value={text}/>
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
