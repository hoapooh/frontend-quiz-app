import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import "react-circular-progressbar/dist/styles.css";
import { QuizProvider } from "./contexts/QuizProvider";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QuizProvider>
			<App />
		</QuizProvider>
	</StrictMode>
);
