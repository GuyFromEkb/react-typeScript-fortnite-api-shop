
export const initialState = { count: 0 };

type ACTIONTYPE =
	| { type: "increment"; payload: number }
	| { type: "decrement"; payload: string }
	| { type: "reset" };

export const myReducer = (	state: typeof initialState,	action: ACTIONTYPE): typeof initialState => {
	switch (action.type) {
		case "increment":
			return { count: state.count + action.payload };
		case "decrement":
			return { count: state.count - Number(action.payload) };
		case "reset": {
			return { ...state, count: 0 };
		}
		default:
			return state;
	}
};
