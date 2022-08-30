import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useMyContext } from "../../hook";

const TextComponent = () => {
	const { state, decrement, increment, reset } = useMyContext();

	return (
		<>
			Count: {state.count}
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<button onClick={reset}>reset</button>
		</>
	);
};

export default TextComponent;
