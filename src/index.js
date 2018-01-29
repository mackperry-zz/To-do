import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import style from "./style.css";
import ToDo from "./To-Do.js";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
};

const App = () => (
	<div style={styles}>
		<ToDo name={""} />
	</div>
);

render(<App />, document.getElementById("root"));

// table heading - task, location, importance,
