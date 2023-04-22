import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
        addItemToCard(state , action ){
            const newItem = action.payload;
            const existenceItem = state.items.find(item =>item.id === newItem.id);
            state.totalQuantity ++;           
             if(!existenceItem) {
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    name:newItem.title,
                });
            }else {
                existenceItem.quantity ++;
                existenceItem.totalPrice = existenceItem.totalPrice + newItem.price;
            }

        },
        removeItemFromCart(state , action) {
            // removeItemId ===> JUST ID OF ITEM!
            const removeItemid= action.payload;
            const existenceItem = state.items.find(item =>item.id === removeItemid);
            if(existenceItem.quantity === 1) {
                //  store OTHER items in array 
                state.items = state.items.filter(item=>item.id !==removeItemid);
            }else {
                existenceItem.quantity--;
                existenceItem.totalPrice = existenceItem.totalPrice - existenceItem.price;
            }
        }

    }
});
export const cartActions = cartSlice.actions;
export default cartSlice;
