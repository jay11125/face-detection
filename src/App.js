import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import Signin from "./components/Signin/Signin";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Register from "./components/Register/Register";

const app = new Clarifai.App({
  apiKey: "43b6b1d24d804638a2edb838a86cbdb2",
});

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  state = {
    input: "",
    imageUrl: "",
    array: [],
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  responseFunc = () => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.setState({ array: response.outputs[0].data.regions });
      })
      .catch((err) => console.log(err));
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    this.responseFunc();
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        <Router>
          <Route exact path="/">
            <Signin />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/main">
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              array={this.state.array}
              response={this.responseFunc}
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
