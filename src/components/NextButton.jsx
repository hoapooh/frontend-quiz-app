import PropTypes from "prop-types";

function NextButton({ userAnswer, dispatch, questions, questionIndex }) {
	const hasAnswered = userAnswer === null;

	const completed = questionIndex === questions.length - 1;

	if (completed) {
		return (
			<button
				type="button"
				className={`${hasAnswered ? "next-btn disabled" : "next-btn normal"}`}
				disabled={hasAnswered}
				onClick={() => dispatch({ type: "finish" })}
			>
				Finish
			</button>
		);
	}

	return (
		<div>
			<button
				type="button"
				className={`${hasAnswered ? "next-btn disabled" : "next-btn normal"}`}
				disabled={hasAnswered}
				onClick={() => dispatch({ type: "nextQuestion" })}
			>
				Continue
			</button>
		</div>
	);
}

NextButton.propTypes = {
	userAnswer: PropTypes.number,
	dispatch: PropTypes.func.isRequired,
	questions: PropTypes.array.isRequired,
	questionIndex: PropTypes.number.isRequired,
};

export default NextButton;
