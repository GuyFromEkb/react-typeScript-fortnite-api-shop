import React, { createContext, useContext, useReducer } from "react";

export const initialState = { count: 0 };

type ACTIONTYPE =
	| { type: "INCREMENT"; payload: number }
	| { type: "DECREMENT"; payload: number }
	| { type: "RESET" };

export const myReducer = (
	state: typeof initialState,
	action: ACTIONTYPE
): typeof initialState => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + action.payload };
		case "DECREMENT":
			return { count: state.count - action.payload };
		case "RESET": {
			return { count: 0 };
		}
		default:
			return state;
	}
};

export interface IAppContext {
	state: typeof initialState;
	dispatch: React.Dispatch<ACTIONTYPE>;
}

export const AppContext = createContext({} as IAppContext);

interface IProps {
	children?: React.ReactNode;
}

export const ContextProvider: React.FC<IProps> = ({ children }) => {
	const [state, dispatch] = useReducer(myReducer, initialState);
	const value = { state, dispatch };

	const context = useContext(AppContext);
	return (
		<>
			<AppContext.Provider value={value}>{children}</AppContext.Provider>
		</>
	);
};
