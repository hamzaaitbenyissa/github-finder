import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

const githubRequest = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: "token " + API_TOKEN,
  },
});

export const fetchUsers = async (input) => {
  const result = await githubRequest.get("/search/users?q=" + input);
  return result.data.items;
};

export const getUser = async (input) => {
  const result = await githubRequest.get(GITHUB_URL + "/users/" + input);
  return result.data;
};

export const getUserRepos = async (input) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 5,
  });

  const result = await githubRequest.get("/users/" + input + "/repos?" + params);
  return result.data;
};
