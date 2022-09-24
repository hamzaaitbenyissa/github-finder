import { createContext, useEffect, useReducer, useState } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoaded: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(GITHUB_URL + "/search/users?q=an", {
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

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoaded: state.isLoaded,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
