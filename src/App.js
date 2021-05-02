import React, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

const app = new Clarifai.App({
	apiKey: "43b6b1d24d804638a2edb838a86cbdb2",
});

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

				<Navigation />

				<ImageLinkForm
					array={this.state.array}
					onInputChange={this.onInputChange}
					onButtonSubmit={this.onButtonSubmit}
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
