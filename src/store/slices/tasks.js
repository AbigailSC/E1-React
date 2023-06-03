import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"

const initialState = {
  items: [],
  pokemonInfo: undefined,
  showFiltered: false,
  itemsFiltered: [],
  filterBy: 'all'
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    edit: (state, action) => {
      state.items = state.items.map(item => item.id === action.payload.id ? action.payload : item);
    },
    toggle: (state, action) => {
      state.items = state.items.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item);
      state.itemsFiltered = state.itemsFiltered.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item);
    },
    filterTasks: (state) => {
      state.showFiltered = !state.showFiltered;
      state.itemsFiltered = state.items.filter(item => !item.completed);
    },
    filterBy: (state, action) => {
      state.filterBy = action.payload;
      state.itemsFiltered = [];
    },
    resetFilter: (state) => {
      state.filterBy = 'all';
      state.itemsFiltered = [];
    },
    getPokemon: (state, action) => {
      state.pokemonInfo = action.payload;
    }
  }
});

export const { add, remove, edit, toggle, filterTasks, filterBy, resetFilter, getPokemon } = tasksSlice.actions;

export default tasksSlice.reducer;

export const getPokemonData = (pokemon) => async (dispatch) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch(getPokemon(data));
  } catch (error) {
    console.log(error);
    dispatch(getPokemon(null));
  }
};