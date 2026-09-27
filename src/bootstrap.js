import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// FIXED: Pass your <App /> component inside the render function
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
