import React from "react";
import ReactDOM from "react-dom";
import Sports from "./SportDetails";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Sports />, div);
	ReactDOM.unmountComponentAtNode(div);
});
