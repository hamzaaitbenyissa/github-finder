const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default GithubReducer;
