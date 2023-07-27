import Title from "./components/Title";
import React from "react";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import picture from "/8ball-removebg-preview.png";
import Final from "./components/Final";

// 1. create a name verifyer -> "login page" which asks user for a name with useState and then uses it later
const App = () => {
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [question, setQuestion] = useState("");
  const [questionConfirmed, setQuestionConfirmed] = useState(false);
  const [qFinal, setQFinal] = useState("");
  const [num, setNum] = useState(0);
  const [answer, setAnswer] = useState("");

  const possibleAnswers = [
    "no",
    "yes",
    "50/50",
    "maybe",
    "definitely",
    "of course",
    "hard to answer",
    "100% yes",
    "kinda",
    "hell nah",
  ];

  const randomNumberInRange = (min, max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(0, 9));
    setIsClicked(true);
  };

  const handleSubmitQuestion = () => {
    //console.log(num);
    setAnswer(possibleAnswers[num]);
    setQFinal(question);
    setQuestion("");
    //console.log(qFinal);
    setQuestionConfirmed(true);
  };

  //const qq = qFinal;
  if (!isClicked) {
    return (
      <WelcomePage
        setName={setName}
        name={name}
        handleClick={handleClick}
        picture={picture}
        question={question}
        handleSubmitQuestion={handleSubmitQuestion}
      />
    );
  } else if (questionConfirmed) {
    //console.log(question);
    //console.log(qFinal);
    return (
      <>
        <Final
          name={name}
          setQuestion={setQuestion}
          handleSubmitQuestion={handleSubmitQuestion}
          question={question}
          qFinal={qFinal}
          questionConfirmed={questionConfirmed}
          picture={picture}
          answer={answer}
        />
      </>
    );
  }
  return (
    <>
      <Title
        name={name}
        setQuestion={setQuestion}
        handleSubmitQuestion={handleSubmitQuestion}
        question={question}
        questionConfirmed={questionConfirmed}
        picture={picture}
        setQFinal={setQFinal}
      />
    </>
  );
};

export default App;
