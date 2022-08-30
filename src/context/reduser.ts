export const initialState = { count: 0 };

type ACTIONTYPE =
	| { type: "INCREMENT"; payload: number }
	| { type: "DECREMENT"; payload: number }
	| { type: "RESET" };

export const myReducer = (	state: typeof initialState,	action: ACTIONTYPE): typeof initialState => {
	switch (action.type) {
		case "INCREMENT":
			return ({count: state.count + action.payload});
		case "DECREMENT":
			return ({ count: state.count - action.payload });
		case "RESET": {
			return ({ count:0});
		}
		default:
			return state;
	}
};
