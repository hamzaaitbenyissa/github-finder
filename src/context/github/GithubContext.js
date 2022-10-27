import { createContext, useEffect, useReducer, useState } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoaded: null,
    user: {},
    userrepos: [],
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

  const getUser = async (input) => {
    const res = await fetch(GITHUB_URL + "/users/" + input, {
      headers: {
        Authorization: "token " + API_TOKEN,
      },
    });
    const result = await res.json();
    dispatch({
      payload: result,
      type: "GET_USER",
    });
  };

  const getUserRepos = async (input) => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 5,
    });

    const res = await fetch(
      GITHUB_URL + "/users/" + input + "/repos?" + params,
      {
        headers: {
          Authorization: "token " + API_TOKEN,
        },
      }
    );
    const result = await res.json();
    dispatch({
      payload: result,
      type: "GET_USER_REPOS",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoaded: state.isLoaded,
        user: state.user,
        userrepos: state.userrepos,
        fetchUsers,
        getUser,
        getUserRepos,
        clearSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
