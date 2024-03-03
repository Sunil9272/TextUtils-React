import React, { useState } from "react";

export default function TextForm(props) {
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase!", "success");
    document.title = "TextUtil-LowerCase";
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase!", "success");
    document.title = "TextUtil-UpperCase";
  };

  const handleOnClick = () => {
    setText("");
    props.showAlert("Cleared!", "success");
    document.title = "TextUtil-Cleared!";
  };

  const handleToCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to clipboard!", "success");
    document.title = "TextUtil-TextCoppied";
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed!", "success");
    document.title = "TextUtil-ExtraSpaces Removed";
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === `light` ? `white` : `#95baef`,
              color: props.mode === `light` ? `black` : `white`,
            }}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Handle Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleToCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words, {text.length} characters,{" "}
          {text.split(". ").length - 1} Sentences
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read time.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
