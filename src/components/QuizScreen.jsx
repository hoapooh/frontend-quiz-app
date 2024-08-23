import PropTYpes from "prop-types";
import Options from "./Options";
import NextButton from "./NextButton";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const languages = ["HTML", "CSS", "JavaScript", "React"];

function QuizScreen({
	questions,
	subject,
	subjects,
	dispatch,
	questionIndex,
	userAnswer,
	numCorrect,
	numWrong,
}) {
	return (
		<div className="quiz">
			<p className="quiz-title">
				<span className="score-style">
					<span className="score">
						<img src="/score.jpg" alt="score icon" />
						{String(subjects[subject].points || 0).padStart(3, "0")}
					</span>
				</span>
				{languages[subject]} QUIZ #{questionIndex + 1}
				<span className="exit-btn" onClick={() => dispatch({ type: "restart" })}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
						{/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
						<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
					</svg>
				</span>
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
				<div style={{ width: 80, height: 80 }}>
					{/* <progress
						value={questionIndex + Number(userAnswer !== null)}
						max={questions.length}
						className="quiz-progress"
					/>{" "}
					{questionIndex + 1} / {questions.length} */}
					<CircularProgressbar
						value={questionIndex + Number(userAnswer !== null)}
						maxValue={questions.length}
						text={`${(questionIndex + Number(userAnswer !== null)) * 10}%`}
						strokeWidth={8}
						styles={buildStyles({
							textSize: "20px",
							pathTransitionDuration: 0.5,
							pathColor: "#31cd63",
							textColor: "#31cd63",
						})}
					/>
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
	subjects: PropTYpes.object.isRequired,
	dispatch: PropTYpes.func.isRequired,
	questionIndex: PropTYpes.number.isRequired,
	userAnswer: PropTYpes.number,
	numCorrect: PropTYpes.number.isRequired,
	numWrong: PropTYpes.number.isRequired,
};

export default QuizScreen;
