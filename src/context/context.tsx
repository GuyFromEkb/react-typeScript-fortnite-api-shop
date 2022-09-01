import React, { createContext, useReducer } from 'react';
import { ACTIONTYPE, IinitialState, myReducer } from './reduser';

export interface IAppContext {
  state: IinitialState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const AppContext = createContext({} as IAppContext);

interface IProps {
  children?: React.ReactNode;
}

const initialState: IinitialState = {
  basketItem: [],
  toast: '',
};

export const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
