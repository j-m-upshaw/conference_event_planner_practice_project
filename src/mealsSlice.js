// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    {
      name: "Breakfast",
      cost: 50,
      selected: false 
    },

    {
      name: "Breakfast",
      cost: 50,
      selected: false 
    },

    {
      name: "Breakfast",
      cost: 50,
      selected: false 
    },

    {
      name: "Breakfast",
      cost: 50,
      selected: false 
    }
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
