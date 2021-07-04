import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //pushing to initalstate
      state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state, action) => {
      //find the index of removing product //returns the index of seaching product , -1 if dosent 
      const index =  state.items.findIndex(basketItem => basketItem.id === action.payload.id);
      //create new basket to switch with old one
      let newBasket = [...state.items];
      if(index >= 0){
        // item exist in baket ...removeit
        newBasket.splice(index,1)
      }else{
        console.warn(`Cannot remove the product (id: ${action.payload.id}) as its not in the basket` )
      }

      state.items = newBasket;

    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
 
// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total,item)=> total + item.price ,0);

export default basketSlice.reducer;
