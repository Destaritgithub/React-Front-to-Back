import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function About() {
  return (
    <Card>
      <div className='about'>
        <h1> About This project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>version:1.0.0</p>
        <Link to='/'>Back to home</Link>
      </div>
    </Card>
  );
}

export default About;
