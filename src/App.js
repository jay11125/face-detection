import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

const USER_ID = "jay11125";
const PAT = "6a209c428b7945d486f85eda8ca94406";
const APP_ID = "0dc8c9f3cd764a769ef4834620c42e46";
const MODEL_ID = "face-detection";
const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 900,
      },
    },
  },
};

class App extends Component {
  state = {
    input:
      "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl: "",
    array: [],
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  responseFunc = () => {
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: this.state.input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => {
        response.json().then((response) => {
          this.setState({ array: response.outputs[0].data.regions });
        });
      })
      .catch((error) => console.log("error", error));
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    this.responseFunc();
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        <Navigation />

        <ImageLinkForm
          array={this.state.array}
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          inputValue={this.state.input}
        />
        <FaceRecognition
          array={this.state.array}
          response={this.responseFunc}
          box={this.state.box}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
