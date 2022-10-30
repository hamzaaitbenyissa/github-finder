const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const fetchUsers = async (input) => {
  const res = await fetch(GITHUB_URL + "/search/users?q=" + input, {
    headers: {
      Authorization: "token " + API_TOKEN,
    },
  });

  const result = await res.json();
  return result.items;
};

export const getUser = async (input) => {
  const res = await fetch(GITHUB_URL + "/users/" + input, {
    headers: {
      Authorization: "token " + API_TOKEN,
    },
  });
  const result = await res.json();
  return result;
};

export const getUserRepos = async (input) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 5,
  });

  const res = await fetch(GITHUB_URL + "/users/" + input + "/repos?" + params, {
    headers: {
      Authorization: "token " + API_TOKEN,
    },
  });
  const result = await res.json();
  return result;
};
