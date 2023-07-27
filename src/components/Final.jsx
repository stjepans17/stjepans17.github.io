import React from "react";

const Final = ({ name, qFinal, questionConfirmed, picture, answer }) => {
  if (questionConfirmed) {
  }

  return (
    <>
      <div className="title">
        <h1>MAGIC 8-BALL</h1>
      </div>
      <div className="subtitle">
        <h2>Ask it anything ! </h2>
      </div>
      <div className="picFinal">
        <img src={picture} alt="" style={{ height: "16em" }} />
      </div>
      <div className="name">
        <h5>Hi, {name}</h5>
        <br />
      </div>
      <div className="questionFinal">
        <h4>Your question is {qFinal}</h4>
      </div>
      <div className="answer">
        <h3>Answer is {answer}</h3>
      </div>
    </>
  );
};

export default Final;
