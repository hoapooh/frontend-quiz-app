import Header from "./Header";
import Main from "./Main";
import HomeScreen from "./HomeScreen";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";
import useQuiz from "../hooks/useQuiz";

function App() {
	const { status } = useQuiz();

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "ready" && <HomeScreen />}
				{status === "active" && <QuizScreen />}
				{status === "finished" && <ResultScreen />}
			</Main>
		</div>
	);
}

export default App;
