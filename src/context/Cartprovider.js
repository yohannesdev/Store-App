import React, { createContext, useContext, useReducer } from 'react';
export const CartContext=createContext();
export const CartState=()=>useContext(CartContext)

 const initialState = {
     cart: []
  };
  
  const reducer=(state,action)=>{
    // console.log(cart.find(id=>id==action.item.id)) 
    
    switch (action.type) {
        case 'ADD_TO_CART':
          return {
            ...state,
          cart: [...state.cart, action.item],
          };
          case 'REMOVE_CART':
            const index3 = state.cart.findIndex(
                (Item) => Item.id === action.id
              );
              let newcart3 = [...state.cart];
        newcart3.splice(index3, 1);
            return {
                ...state,
                cart: newcart3,
              };
          case 'ADD_QUANTITY':
            const index = state.cart.findIndex(
              (Item) => Item.id === action.id
            );
            let newcart = state.cart.map(item => ({ ...item }))
      newcart[index].quantity=newcart[index].quantity+1;
    // console.log(newcart)
    // console.log(newcart[index])
      console.log(`quantity ${newcart[index].quantity}`)
   
            return {
                ...state,
               cart: newcart,
              };
              case 'REDUCE_QUANTITY':
                const index2 = state.cart.findIndex(
                  (Item) => Item.id === action.id
                );
                let newcart2 = state.cart.map(item => ({ ...item }))
                if(newcart2[index2].quantity>1){
           newcart2[index2].quantity=newcart2[index2].quantity-1;}
         return {
            ...state,
                   cart: newcart2,
                  };
                  case 'EMPTY_CART':
                      return {
                          ...state,
                          cart:[]
                      }
                  default:
        return state;
             }
}

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
