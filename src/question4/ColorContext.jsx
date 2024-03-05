import { createContext, useContext, useReducer } from "react";

export const ColorContext = createContext();

const initialState = {
  color: ""
}

function colorReducer(state, action) {
  if (action.type === "selectFavourite") {
    return {
      ...state,
      color: action.color, // eller action.color
    }
  } else {
    console.log("Unknown action type: ", action.type);
    return state;
  }
}

export function ColorProvider( {children} ) {
  const [state, dispatch] = useReducer(colorReducer, initialState)

  return (
    <ColorContext.Provider value={{state, dispatch}}>
    {children}
    </ColorContext.Provider>
  )
}

export function useColors() {
  return useContext(ColorContext)
}