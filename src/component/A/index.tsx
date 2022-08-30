import { useReducer } from "react";
import { myReducer, initialState } from "../../context/reduser";

const TextComponent = () => {
	const [state, dispatch] = useReducer(myReducer, initialState);

	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
				-
			</button>
			<button onClick={() => dispatch({ type: "increment", payload: 5 })}>
				+
			</button>
			<button onClick={() => dispatch({ type: "reset" })}>reset</button>
		</>
	);
};

export default TextComponent;
