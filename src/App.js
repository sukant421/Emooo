import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import BookConatiner from "./BookConatiner";
import CountComponent from "./CountComponent";
import Loader from "./loader";
import { useEffect, useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHiScore] = useState(0);
  const [rows, setRows] = useState(5);
  const [time, setTime] = useState(Math.ceil(60000 / 1000));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        return prevTime > 0 ? prevTime - 1 : 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setHiScore(Math.max(highScore, score));
    }
  }, [time]);

  return (
    <Provider store={store}>
      {/* <BookConatiner />
      <br />
      ----------------------------------
      <br />
      <CountComponent /> */}
      <div className="App">
        <h2>Score: {score}</h2>
        <h2>Time: {time}</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <button
            onClick={() => {
              setScore(0);
              setTime(Math.ceil(60000 / 1000));
            }}
          >
            Reset
          </button>
          <select
            onChange={(e) => setRows(Number(e.target.value))}
            value={rows}
          >
            <option value="5">5</option>
            <option value="8">8</option>
          </select>
        </div>
        <hr />
        <div className="App">
          {[...Array(rows)].map((_, i) => (
            <Loader key={i} setScore={setScore} isTimeLeft={time > 0} />
          ))}
        </div>
        <h2
          style={{
            fontSize: time === 0 ? "40px" : "25px",
          }}
        >
          {time === 0 ? "Time Up" : "Keep Going!"}
        </h2>
        {time === 0 && <h2>High Score: {Math.max(score, 0)}</h2>}
      </div>
    </Provider>
  );
}

export default App;
