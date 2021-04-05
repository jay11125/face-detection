import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, array }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500" height="auto" />

        {array.map((x) => {
          const image = document.getElementById("inputimage");
          const width = Number(image.width);
          const height = Number(image.height);
          return (
            <div
              key={x.id}
              className="bounding-box"
              style={{
                top: x.region_info.bounding_box.top_row * height,
                right: width - x.region_info.bounding_box.right_col * width,
                bottom: height - x.region_info.bounding_box.bottom_row * height,
                left: x.region_info.bounding_box.left_col * width,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
