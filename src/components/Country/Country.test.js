import React from "react";
import ReactDOM from "react-dom";
import Groups from "./Country";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Groups />, div);
	ReactDOM.unmountComponentAtNode(div);
});
