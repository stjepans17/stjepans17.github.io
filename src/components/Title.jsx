import React from "react";

const Title = ({
  name,
  setQuestion,
  handleSubmitQuestion,
  question,
  questionConfirmed,
  picture,
  setQFinal,
}) => {
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
      <div className="pic">
        <img src={picture} alt="" style={{ height: "16em" }} />
      </div>

      <div className="question">
        <h2>Enter your question</h2>
      </div>
      <div className="question-inputbox">
        <input
          type="text"
          placeholder="question"
          onChange={(e) => {
            setQuestion(e.target.value);
            setQFinal(e.target.value);
          }}
          value={question}
        />
        <button
          type="button"
          className="btn btn-light"
          style={{ marginRight: "-70px" }}
          onClick={handleSubmitQuestion}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Title;
