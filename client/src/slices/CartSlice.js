import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
        let newCart = state.items;
        let itemIndex = state.items.findIndex(item => item._id === action.payload.id);
        if(itemIndex>=0){
            newCart.splice(itemIndex, 1);
        }else{
            console.log("Can't remove the item that is not added to the cart");
        }
        state.items = newCart;
      },
    emptyCart: (state, action) => {
        state.items = [];
    },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = CartSlice.actions

export const selectCartItems = state=> state.cart.items;

export const selectCartItemsById = createSelector(
    [selectCartItems, (_, itemId) => itemId],
    (items, itemId) => items.filter(item => item._id === itemId)
  );

export const selectCartTotal = state=> state.cart.items.reduce((total, item)=> total = total+item.price, 0);

export default CartSlice.reducer