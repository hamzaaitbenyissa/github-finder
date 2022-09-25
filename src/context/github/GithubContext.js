import { createContext, useEffect, useReducer, useState } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoaded: null,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async (input) => {
    setLoading();
    const res = await fetch(GITHUB_URL + "/search/users?q=" + input, {
      headers: {
        Authorization: "token " + API_TOKEN,
      },
    });
    const result = await res.json();
    dispatch({
      payload: result.items,
      type: "GET_USERS",
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const clearSearch = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoaded: state.isLoaded,
        fetchUsers,
        clearSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
