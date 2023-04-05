import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // value: [`timer`, `calculator`, `toDo`, `weather`, `randomRecipe`, `films`, `currency`],
  value: JSON.parse(localStorage.getItem('panel')) || [],
  valueVisible: false,
};

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    change: (state, action) => {
      state.valueVisible = !state.valueVisible;
      // localStorage.setItem('panel', JSON.stringify(state.value));
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
export const { add, deleteItem, change } = panelSlice.actions;

export default panelSlice.reducer;
