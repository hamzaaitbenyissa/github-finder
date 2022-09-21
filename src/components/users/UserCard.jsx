import React, { useEffect, useState } from "react";

function UserCard({ avatar, name }) {
  const [userdetails, SetUserDetails] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_GITHUB_URL + "/users/" + name, {
      headers: {
        Authorization: "token " + process.env.REACT_APP_GITHUB_API_TOKEN,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          SetUserDetails(result);
          console.log(result)
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
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center ">
          <h4 className="card-title">{userdetails.name}</h4>
          <p>{userdetails.location}</p>
          <div className="card-actions">
            <button className="btn btn-outline">Details</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
