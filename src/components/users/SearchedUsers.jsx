import React, { useContext, useEffect, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import UserCard from "./UserCard";

function SearchedUsers() {
  const { users, isLoaded } = useContext(GithubContext);

  if (isLoaded == null) {
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 ">
        {users.map((user) => (
          <UserCard key={user.id} avatar={user.avatar_url} name={user.login} />
        ))}
      </div>
    );
  }
}

export default SearchedUsers;
