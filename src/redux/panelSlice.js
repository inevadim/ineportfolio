import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // value: [`timer`, `calculator`, `toDo`, `weather`, `randomRecipe`, `films`, `currency`],
  value: JSON.parse(localStorage.getItem('panel')) || [],
};

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    add: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem('panel', JSON.stringify(state.value));
    },
    deleteItem: (state, action) => {
      // console.log(state.value.id);
      state.value = state.value.filter(item => item.id !== action.payload);
      console.log(action.payload);
      // state.value = action.payload;
      localStorage.setItem('panel', JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, add, deleteItem } = panelSlice.actions;

export default panelSlice.reducer;
