import classes from './home.module.css';
import {Link} from 'react-router-dom';
export default function Home(){
    return (
        <div className={classes.welcome}>
          <h2>Let's do some quizzes!</h2>
          <Link to="/quiz"><div className="btn btn-outline-success">
            Start
          </div></Link>
        </div>
      );
}