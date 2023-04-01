import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ inputValue, onInputChange, onButtonSubmit, array }) => {
  return (
    <div>
      <div className="info">
        {array ? (
          array.length !== 0 ? (
            <p className="f3 bold">
              {array.length + " faces detected! Explore more with other image urls :)"}{" "}
            </p>
          ) : (
            <p className="f3 bold">{"Enter an image url below to detect faces :)"}</p>
          )
        ) : (
          <p className="f3 bold">{"Zero faces detected...Please try another image url :("}</p>
        )}
      </div>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            placeholder="Enter image url"
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            defaultValue={inputValue}
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
