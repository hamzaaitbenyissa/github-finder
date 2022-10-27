const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoaded: true,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "GET_USER_REPOS":
      return {
        ...state,
        userrepos: action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoaded: false,
      };
    case "RESET":
      return {
        ...state,
        users: [],
        isLoaded: null,
      };
    default:
      return state;
  }
};

export default GithubReducer;
