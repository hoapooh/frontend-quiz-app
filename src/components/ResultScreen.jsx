import PropTypes from "prop-types";

function ResultScreen({ subjects, subject, dispatch }) {
	return (
		<div>
			<div>Your score: {subjects[subject].points}</div>
			<div>Your high score: {subjects[subject].highScore}</div>
			<button onClick={() => dispatch({ type: "restart" })}>Restart </button>
		</div>
	);
}

ResultScreen.propTypes = {
	subjects: PropTypes.object.isRequired,
	subject: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
};

export default ResultScreen;
