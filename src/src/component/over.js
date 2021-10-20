import classes from './over.module.css';
import { useHistory } from 'react-router';

export default function Result({points,setCount,setPoints}){
    const history = useHistory();

    const home = () => {
        history.push("/");
        setPoints(0);
        setCount(0);
    }
    const again = () => {
        history.push("/quiz");
        setPoints(0);
        setCount(0);
    }

    return (
      <div className={classes.thank}>
        <h2>Thanks for playing!</h2>
        <h3>Your points: {points} !</h3>
        <h2>Do you wanna try again?</h2>
        <div className={classes.retry}>
          <button className="btn btn-outline-success" onClick={again}>
            Yes
          </button>
          <button className="btn btn-outline-danger" onClick={home}>
            Nah
          </button>
        </div>
      </div>
    );
}