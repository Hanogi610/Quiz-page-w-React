import classes from "./quiz.module.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
const data = [
  {
    question: "What's the capital of Iceland?",
    answerOption: [
      { answerText: "London" },
      { answerText: "Reykjavík" },
      { answerText: "Luxembourg" },
      { answerText: "New York" },
    ],
    correctAnswer: "Reykjavík",
  },
  {
    question: "Where's Olympic Games 2016 held at?",
    answerOption: [
      { answerText: "Tokyo" },
      { answerText: "Rio" },
      { answerText: "Jakartar" },
      { answerText: "Hanoi" },
    ],
    correctAnswer: "Rio",
  },
  {
    question: "Who's the richest woman in the world?",
    answerOption: [
      { answerText: "Françoise Bettencourt Meyers" },
      { answerText: "Alice Walton" },
      { answerText: "MacKenzie Scott" },
      { answerText: "Julia Koch" },
    ],
    correctAnswer: "Françoise Bettencourt Meyers",
  },
  {
    question: "What's the favorite sport of US?",
    answerOption: [
      { answerText: "Basketball" },
      { answerText: "Baseball" },
      { answerText: "Soccer" },
      { answerText: "American Football" },
    ],
    correctAnswer: "American Football",
  },
  {
    question: "Ai viết quiz này?",
    answerOption: [
      { answerText: "Son thối" },
      { answerText: "Anh Hoàng" },
      { answerText: "bố" },
      { answerText: "mẹ" },
    ],
    correctAnswer: "Hoàng",
  },
];
const praise = [
  "You're a genius!",
  "So brilliant!",
  "Keep going~",
  "Excellent!",
];
const boo = [
  "You're so dumb!",
  "Are you elementary schooler?",
  "This question ez af !",
  "What a twat?!",
];
export default function Quiz({
  points,
  setPoints,
  count,
  setCount,
  timer,
  setTimer,
}) {
  const history = useHistory();
  const [timeOut, setTimeOut] = useState(false);
  useEffect(()=>{
    setTimer(15);
    clearInterval(localStorage.getItem("interval-s"));
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + 1000;
    let interval = setInterval(() => {
      date = new Date().getTime();
      if (date > nextDate) {
        setTimer((prev) => {
          if (prev > 0) {
            return prev - 1;
          }
          nextDate += 1000;
        });
      }
    }, 1000);
    localStorage.clear();
    localStorage.setItem("interval-s",interval)
  },[count])
  useEffect(()=>{
    if(timer == 0){
      if (count === data.length - 1) {
        history.push("/over");
      } else {
        setCount((prev) => prev + 1);
      }
    }
  },[timer]);
  useEffect(()=>{
    setTimeOut(false);
    if( timer <= 3){
      setTimeOut(true);
    }
  },[timeOut,timer]);
  const check = (e) => {
    e.preventDefault();
    if (e.target.value == data[count].correctAnswer) {
      setPoints((prev) => prev + Math.floor(10 / data.length));
      document.getElementById("pov").innerHTML =
        praise[Math.floor(Math.random() * praise.length)];
      setTimeout(()=>{
          document.getElementById("pov").innerHTML = "Do you have fun?"
        },3000);
    } else {
      document.getElementById("pov").innerHTML =
        boo[Math.floor(Math.random() * boo.length)];
      setTimeout(()=>{
          document.getElementById("pov").innerHTML = "Do you have fun?"
        },3000);
    }
    if (count === data.length - 1) {
      history.push("/over");
    } else {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      <nav>
        <ul>
          <li key="points">
            <span id="points">{points}</span>
          </li>
          <li key="count">
            <span id="count">{count}</span>/{data.length}
          </li>
        </ul>
      </nav>
      <div className={classes.controller}>
        <h1 className={classes.pov}>
          POV: <span id="pov">Do you have fun?</span>
        </h1>
        <p id={classes.timer}>Time left:  
        <span className={timeOut && classes.redtimer}>
          {timer}
        </span></p>
      </div>
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
