import React, { createContext, useContext, useReducer } from 'react';
export const initialState = {
    user: null,
  };
  export const AuthContext=createContext();
export const AuthState=()=>useContext(AuthContext)
  const reducer=(state,action)=>{
    switch (action.type) {
    case 'SET_USER':
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state;
      }
  }
  
  
  function AuthProvider({children}) {
    return (
      <div>
        <AuthContext.Provider value={useReducer(reducer,initialState)}>
{children}
            </AuthContext.Provider>
      </div>
    )
  }
  
  export default AuthProvider
  