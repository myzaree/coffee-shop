import React, { createContext, useReducer } from 'react';

import {
  coffeeReducer,
  CoffeeState,
  CoffeeActions,
  History,
  HistoryActions,
  historyReducer,
} from './reducers';

type InitialStateType = {
  coffee: CoffeeState;
  history: History[];
};

const initialState = {
  coffee: {
    current: null,
    size: null,
    options: [],
  },
  history: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<CoffeeActions | HistoryActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { coffee, history }: InitialStateType,
  action: CoffeeActions | HistoryActions
) => ({
  coffee: coffeeReducer(coffee, action),
  history: historyReducer(history, action),
});

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
