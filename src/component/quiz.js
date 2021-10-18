import classes from './quiz.module.css';
import { useHistory } from 'react-router';
const data = [
  {
    question: "1+1=?",
    answerOption: [
      { answerText: "1" },
      { answerText: "2" },
      { answerText: "3" },
      { answerText: "4" },
    ],
    correctAnswer: "2",
  },
  {
    question: "3*4=?",
    answerOption: [
      { answerText: "7" },
      { answerText: "12" },
      { answerText: "1" },
      { answerText: "4" },
    ],
    correctAnswer: "12",
  },
  {
    question: "6+10=?",
    answerOption: [
      { answerText: "0" },
      { answerText: "60" },
      { answerText: "4" },
      { answerText: "16" },
    ],
    correctAnswer: "16",
  },
  {
    question: "30/10=?",
    answerOption: [
      { answerText: "20" },
      { answerText: "2" },
      { answerText: "3" },
      { answerText: "15" },
    ],
    correctAnswer: "3",
  },
  {
    question: "3+4*5=?",
    answerOption: [
      { answerText: "23" },
      { answerText: "60" },
      { answerText: "35" },
      { answerText: "45" },
    ],
    correctAnswer: "23",
  },
];

export default function Quiz({points,setPoints,count,setCount}){
    const history = useHistory();
    const check = (e) => {
        e.preventDefault();
        if (e.target.value == data[count].correctAnswer) {
          setPoints((prev) => prev + 20);
        }
        if(count === data.length-1){
          history.push("/over");
        }else{
          setCount(prev=>prev+1);
        }
    }
    return (
        <div>
          <nav>
            <ul>
              <li>
                <span id="points">{points}</span>
              </li>
              <li>
                <span id="count">{count}</span>/{data.length}
              </li>
            </ul>
          </nav>
          <div className={classes.player}>
            <span className={classes.question}>{data[count].question}</span>
            <form id={classes.answer}>
            {data[count].answerOption.map(function (a) {
                    return (
                      <button
                        value={a.answerText}
                        onClick={check}
                        className="btn btn-outline-info"
                      >
                        {a.answerText}
                      </button>
                    );
                })}
            </form>
          </div>
        </div>
      );
}
