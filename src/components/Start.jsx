import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../store/action";
import { Input, Form } from "antd";



const Start = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const dispatch = useDispatch();
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(0);
  const [time, setTime] = useState(120);
  const handleQuizStart = () => {
    onFinish()
    dispatch(startQuiz(time));

  };
  useEffect(() => {
    if (minute > 59) {
      setMinute(1);
    }
    if (second > 59) {
      setSecond(1);
    }
  }, [minute, second]);
  useEffect(() => {
    console.log(minute);
    console.log(typeof minute);
    if (minute !== NaN && second !== NaN) {
      setTime(minute * 120 + second);
    }
  }, [minute, second]);
  return (
    <div className="startBox">
      <div>
        <div>
          <h1>How Good You Know Memes</h1>
          <input type="text" required/>
          <p>Good luck!</p>
          <p>Time:&nbsp;&nbsp;{time}sec</p>
          <button className="startButton" onClick={handleQuizStart}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
