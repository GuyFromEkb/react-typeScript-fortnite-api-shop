import { useContext } from "react";
import { AppContext } from "../context/context";

export const useMyContext = () => {
	const { state, dispatch } = useContext(AppContext);

	const increment = () => {
		dispatch({ type: "INCREMENT", payload: 7 });
	};
	const decrement = () => {
		dispatch({ type: "DECREMENT", payload: 7 });
	};
	const reset = () => {
		dispatch({ type: "RESET" });
	};

	return {
		state,
		increment,
		decrement,
		reset,
	};
};
