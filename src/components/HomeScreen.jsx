import useQuiz from "../hooks/useQuiz";

function HomeScreen() {
	const { dispatch } = useQuiz();

	return (
		<div className="home">
			<div className="home-welcome">
				<h1 className="home-welcome-title">
					Welcome to the <br /> <strong>Front-end Quiz !</strong>
				</h1>
				<p className="home-welcome-desc">
					Choose a subject to start the quiz. You will be asked a series of{" "}
					<strong style={{ color: "var(--color-btn)" }}>10</strong> multiple-choice
					questions. <br />{" "}
					<strong style={{ color: "var(--color-text)" }}>Good luck!</strong>
				</p>
			</div>
			<div className="home-subject">
				<button
					className="home-subject-btn"
					onClick={() => dispatch({ type: "start", payload: 0 })}
				>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
				</button>
				<button
					className="home-subject-btn"
					onClick={() => dispatch({ type: "start", payload: 1 })}
				>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
				</button>
				<button
					className="home-subject-btn"
					onClick={() => dispatch({ type: "start", payload: 2 })}
				>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
				</button>
				<button
					className="home-subject-btn"
					onClick={() => dispatch({ type: "start", payload: 3 })}
				>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
				</button>
			</div>
		</div>
	);
}

export default HomeScreen;
