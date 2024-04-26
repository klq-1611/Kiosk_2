import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            let itemIndex = state.items.findIndex(item => item.id == action.payload.id);
            if (itemIndex !== -1) {
                newCart.splice(itemIndex, 1);
            }
            state.items = newCart;
        },
        emptyCart: (state, action) => {
            state.items = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCartItemsById = (id) => (state) => state.cart.items.filter(dish => dish.id == id);

export const selectCartTotal = state => {
    let total = state.cart.items.reduce((total, dish) => total = total + dish?.price || 0, 0);
    return Math.round((total + Number.EPSILON) * 100) / 100;
};

export default cartSlice.reducer