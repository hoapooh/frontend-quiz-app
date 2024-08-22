import PropTypes from "prop-types";

function HomeScreen({ dispatch }) {
	return (
		<div className="home">
			<div className="home-welcome">
				<h1 className="home-welcome-title">
					Welcome to the <br /> <strong>Front-end Quiz !</strong>
				</h1>
				<p className="home-welcome-desc">
					Choose a subject to start the quiz. You will be asked a series of
					multiple-choice questions. Good luck!
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

HomeScreen.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default HomeScreen;
