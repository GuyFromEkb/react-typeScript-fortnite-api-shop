import { createContext } from "react";

interface IContextProp {
	a: string;
	setA(str: string): void;
}

const sampleAppContext: IContextProp = {
	a: "start value",
	setA(str: string) {
		this.a = str;
	},
};

export const AppCtx = createContext({} as IContextProp);

interface IContext {
	children?: React.ReactNode;
}

export const ContextProvider: React.FC<IContext> = ({ children }) => {
	return (
		<>
			<AppCtx.Provider value={sampleAppContext}>{children}</AppCtx.Provider>
		</>
	);
};

