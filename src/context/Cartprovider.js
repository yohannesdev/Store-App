import React, { createContext, useContext, useReducer } from 'react';
export const CartContext=createContext();
export const CartState=()=>useContext(CartContext)
 const initialState = {
    cart: []
  };
  
  const reducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
          return {
            ...state,
          cart: [...state.cart, action.item],
          };
  }
}
console.log(initialState.cart)
const Cartprovider=({children})=> {
    return (
        <div>
            <CartContext.Provider value={useReducer(reducer,initialState)}>
{children}
            </CartContext.Provider>
        </div>
    )
}

export default Cartprovider
