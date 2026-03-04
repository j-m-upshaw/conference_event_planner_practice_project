import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [

    {
      img: "https://pixabay.com/images/download/jarmoluk-projector-428664_1920.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0, 
    },

    {
      img: "https://pixabay.com/images/download/bru-no-multimedia-870737_1920.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0, 
    },

    {
      img: "https://pixabay.com/images/download/spoiu23-microphone-5594702_1920.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0, 
    },

    {
      img: "https://pixabay.com/images/download/clickerhappy-board-2209239_1920.jpg",
      name: "Whiteboards",
      cost: 80,
      quantity: 0, 
    },

    {
      img: "https://pixabay.com/images/download/publicdomainpictures-signage-2653_1920.jpg",
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
