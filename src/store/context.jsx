import { useEffect, useReducer, createContext } from 'react';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const storedItems = JSON.parse(localStorage.getItem('items'));
  const storedItemsFiltered = storedItems.filter((item) => !item.completed);

  const initialState = {
    items: storedItems || [],
    itemsFiltered: storedItemsFiltered || [],
    showFiltered: false,
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
    localStorage.setItem('itemsFiltered', JSON.stringify(state.itemsFiltered));
  }, [state.items]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
