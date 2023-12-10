import { createContext, useReducer, useState } from 'react'

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { }
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const Updateditems = [...state.items];
        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const UpdatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1

            }
            Updateditems[existingCartItemIndex] = UpdatedItem;
        }
        else {
            Updateditems.push({ ...action.item, quantity: 1 })
        }
        return { ...state, items: Updateditems };
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex];
        const Updateditems = [...state.items];
        if(existingCartItem.quantity===1)
        {
            Updateditems.splice(existingCartItemIndex,1)
        }
   else{
    const UpdatedItem={...existingCartItem,quantity :existingCartItem.quantity-1
    }
    Updateditems[existingCartItemIndex]=UpdatedItem;

   }
   return { ...state, items: Updateditems };
    }
    return state;
}


export function CartContextProvider({ children }) {
    const [cart,dispatchCartAction]=useReducer(cartReducer, { items: [] });

function addItem(item)
{
dispatchCartAction({"type":'ADD_ITEM',item})
}
function removeItem(id)
{
    dispatchCartAction({"type":'REMOVE_ITEM',id})
}

const cartContext={
    items:cart.items,
addItem,
removeItem
};
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
export default CartContext;