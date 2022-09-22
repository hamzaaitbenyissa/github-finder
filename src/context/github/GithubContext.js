import { createContext, useState } from "react";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
  const API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

  const fetchUsers = async () => {
    const res = await fetch(GITHUB_URL + "/search/users?q=hamzaait", {
      headers: {
        Authorization: "token " + API_TOKEN,
      },
    });
    const result = await res.json();
    setUsers(result.items);
    setIsLoaded(true);
  };

  // const fetchUserDetails = async (name) => {
  //   const res = await fetch(GITHUB_URL + "/users/" + name, {
  //     headers: {
  //       Authorization: "token " + API_TOKEN,
  //     },
  //   });
  //   const result = await res.json();
  // };

  return (
    <GithubContext.Provider
      value={{
        users,
        fetchUsers,
        isLoaded,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
