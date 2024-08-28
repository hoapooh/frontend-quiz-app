import useQuiz from "../hooks/useQuiz";

function NextButton() {
	const { userAnswer, dispatch, questions, questionIndex } = useQuiz();
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

export default NextButton;
