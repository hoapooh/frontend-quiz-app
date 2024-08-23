import { useEffect, useReducer } from "react";
import { MainAPI } from "../MainAPI";
import Header from "./Header";
import Main from "./Main";
import HomeScreen from "./HomeScreen";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";

const initialState = {
	questions: [],

	// 'ready', 'active', 'finished'
	status: "ready",

	// 0, 1, 2, 3
	// html, css, js, react
	subjects: {
		0: { completed: false, points: 0, highScore: 0 },
		1: { completed: false, points: 0, highScore: 0 },
		2: { completed: false, points: 0, highScore: 0 },
		3: { completed: false, points: 0, highScore: 0 },
	},

	subject: null,

	// This is use for re-render the questions
	restartCounter: 0,

	questionIndex: 0,
	userAnswer: null,
	numCorrect: 0,
	numWrong: 0,
};

function reducer(state, action) {
	const subjectObject = state.subjects[state.subject];
	switch (action.type) {
		case "dataReceived":
			return { ...state, questions: action.payload };
		case "dataFailed":
			return { ...state, status: "error" };
		case "start":
			return {
				...state,
				status: "active",
				subject: action.payload,
				questions: state.questions.at(action.payload).Quiz,
			};
		case "answer": {
			const correct = state.questions.at(state.questionIndex).answer === action.payload;
			return {
				...state,
				userAnswer: action.payload,
				numCorrect: state.numCorrect + (correct ? 1 : 0),
				numWrong: state.numWrong + (correct ? 0 : 1),
				subjects: {
					...state.subjects,
					[state.subject]: {
						...subjectObject,
						points: subjectObject.points + (correct ? 10 : 0),
					},
				},
			};
		}
		case "nextQuestion": {
			return {
				...state,
				questionIndex: state.questionIndex + 1,
				userAnswer: null,
			};
		}
		case "finish":
			return {
				...state,
				status: "finished",
				subjects: {
					...state.subjects,
					[state.subject]: {
						...subjectObject,
						completed: true,
						highScore: Math.max(subjectObject.points, subjectObject.highScore),
					},
				},
			};
		case "restart":
			return {
				...initialState,
				restartCounter: state.restartCounter + 1,
				subjects: {
					0: { completed: false, points: 0, highScore: state.subjects[0].highScore },
					1: { completed: false, points: 0, highScore: state.subjects[1].highScore },
					2: { completed: false, points: 0, highScore: state.subjects[2].highScore },
					3: { completed: false, points: 0, highScore: state.subjects[3].highScore },
				},
			};
		default:
			throw new Error(`Unsupported action type: ${action.type}`);
	}
}

function App() {
	const [
		{
			questions,
			status,
			questionIndex,
			subject,
			subjects,
			userAnswer,
			numCorrect,
			numWrong,
			restartCounter,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch(MainAPI)
			.then((response) => response.json())
			.then((data) => dispatch({ type: "dataReceived", payload: data }))
			.catch((err) => dispatch({ type: "dataFailed", payload: err }));
	}, [restartCounter]);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "ready" && <HomeScreen dispatch={dispatch} />}
				{status === "active" && (
					<QuizScreen
						questions={questions}
						subject={subject}
						subjects={subjects}
						questionIndex={questionIndex}
						dispatch={dispatch}
						userAnswer={userAnswer}
						numCorrect={numCorrect}
						numWrong={numWrong}
					/>
				)}
				{status === "finished" && (
					<ResultScreen
						subject={subject}
						subjects={subjects}
						numCorrect={numCorrect}
						dispatch={dispatch}
					/>
				)}
			</Main>
		</div>
	);
}

export default App;
