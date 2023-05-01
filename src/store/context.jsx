import { useEffect, useReducer, createContext } from 'react';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const storedItems = JSON.parse(localStorage.getItem('items'));

  const initialState = {
    items: storedItems || [],
    showFiltered: false,
    itemsFiltered: [],
    filterBy: 'all',
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
      case 'DELETE_TASK':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
          loading: false,
          error: false
        };
      case 'EDIT_TASK':
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
          loading: false,
          error: false
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload
              ? { ...item, completed: !item.completed }
              : item
          ),
          loading: false,
          error: false
        };
      case 'FILTER_TASKS':
        return {
          ...state,
          showFiltered: !state.showFiltered,
          itemsFiltered: state.items.filter((item) => !item.completed),
          loading: false,
          error: false
        };
      case 'FILTER_BY':
        return {
          ...state,
          filterBy: action.payload,
          loading: false,
          error: false
        };
      case 'RESET_FILTER':
        return {
          ...state,
          filterBy: 'all',
          loading: false,
          error: false
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
