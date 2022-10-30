import { createContext, useEffect, useReducer, useState } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoaded: null,
    user: {},
    userrepos: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
