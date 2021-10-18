import Home from "./component/home";
import Quiz from "./component/quiz";
import Result from "./component/over";
import { useState } from "react";
import {Route,Switch} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState(0);
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/quiz">
        <Quiz
          count={count}
          setCount={setCount}
          points={points}
          setPoints={setPoints}
        />
      </Route>
      <Route path="/over">
        <Result points={points} setCount={setCount} setPoints={setPoints} />
      </Route>
    </Switch>
  );
}

export default App;
