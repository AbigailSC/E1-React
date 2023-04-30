import { useEffect, useReducer, createContext } from 'react';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const initialState = {
    items: [],
    loading: true,
    error: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          items: [...state.items, action.payload],
          loading: false,
          error: false
        };
      case 'SET_LOADING':
        return {
          ...state,
          items: '',
          loading: true,
          error: false
        };
      case 'SET_ERROR':
        return {
          ...state,
          items: '',
          error: true,
          loading: false
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
