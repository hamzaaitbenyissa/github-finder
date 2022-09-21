import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function SearchedUsers() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(process.env.REACT_APP_GITHUB_URL + "/users", {
      headers: {
        Authorization: "token " + process.env.REACT_APP_GITHUB_API_TOKEN,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
          setIsLoaded(true);
        },
        (error) => {
          alert("Ooops! there is an error");
        }
      );
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 ">
        {users.map((user) => (
          <UserCard avatar={user.avatar_url} name={user.login} />
        ))}
      </div>
    );
  }
}

export default SearchedUsers;
