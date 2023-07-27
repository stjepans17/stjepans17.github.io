import React from "react";

// create a form with input box and a button that asks user for his name, after clicking the button onClick function is called and changes
// state name to the actual name of the user (do not forget about mutation)
const WelcomePage = ({ setName, handleClick, picture }) => {
  return (
    <>
      <h1 className="welcome-title">MAGIC 8-BALL</h1>

      <div className="picOne">
        <img src={picture} alt="" style={{ height: "16em" }} />
      </div>

      <div className="welcome">
        <form>
          <label>
            <input
              type="text"
              className="inputBox"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <button
              type="button"
              className="btn btn-light"
              onClick={handleClick}
            >
              Confirm
            </button>
          </label>
        </form>
      </div>
    </>
  );
};

export default WelcomePage;
