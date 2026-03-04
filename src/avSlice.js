import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [

    {
      img: "https://media.istockphoto.com/id/1429966133/photo/projector-on-the-ceiling.jpg?s=1024x1024&w=is&k=20&c=Eb-0wrjrxwbwQJAy9Any0wd9X1GNl-_UYNjON9JbO4c=",
      name: "Projectors",
      cost: 200,
      quantity: 0, 
    },

    {
      img: "https://images.pexels.com/photos/9842750/pexels-photo-9842750.jpeg",
      name: "Speaker",
      cost: 35,
      quantity: 0, 
    },

    {
      img: "https://images.pexels.com/photos/8132463/pexels-photo-8132463.jpeg",
      name: "Microphones",
      cost: 45,
      quantity: 0, 
    },

    {
      img: "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg",
      name: "Whiteboards",
      cost: 80,
      quantity: 0, 
    },

    {
      img: "https://images.pexels.com/photos/1706018/pexels-photo-1706018.jpeg",
      name: "Signage",
      cost: 80,
      quantity: 0, 
    }
    
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
      
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
