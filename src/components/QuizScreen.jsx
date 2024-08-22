import PropTYpes from "prop-types";
import Options from "./Options";
import NextButton from "./NextButton";

const languages = ["HTML", "CSS", "JavaScript", "React"];

function QuizScreen({
	questions,
	subject,
	dispatch,
	questionIndex,
	userAnswer,
	numCorrect,
	numWrong,
}) {
	return (
		<div className="quiz">
			<p className="quiz-title">
				{languages[subject]} QUIZ #{questionIndex + 1}
			</p>
			<h2 className="quiz-question">{questions.at(questionIndex).question}</h2>
			<div>
				<progress
					value={numCorrect}
					max={questions.length}
					className="quiz-progress right float"
				/>
				<p className="quiz-text correct">Correct Answer</p>
			</div>
			<div>
				<progress
					value={numWrong}
					max={questions.length}
					className="quiz-progress wrong float"
				/>
				<p className="quiz-text wrong">Wrong Answer</p>
			</div>
			<Options
				userAnswer={userAnswer}
				dispatch={dispatch}
				question={questions.at(questionIndex)}
			/>
			<div className="quiz-footer">
				<div>
					<progress
						value={questionIndex + Number(userAnswer !== null)}
						max={questions.length}
						className="quiz-progress"
					/>{" "}
					{questionIndex + 1} / {questions.length}
				</div>
				<NextButton
					userAnswer={userAnswer}
					dispatch={dispatch}
					questionIndex={questionIndex}
					questions={questions}
				/>
			</div>
		</div>
	);
}

QuizScreen.propTypes = {
	questions: PropTYpes.array.isRequired,
	subject: PropTYpes.number.isRequired,
	dispatch: PropTYpes.func.isRequired,
	questionIndex: PropTYpes.number.isRequired,
	userAnswer: PropTYpes.number,
	numCorrect: PropTYpes.number.isRequired,
	numWrong: PropTYpes.number.isRequired,
};

export default QuizScreen;
