import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

function UserProfail() {
  let { login } = useParams();
  const { getUser, user } = useContext(GithubContext);

  useEffect(() => {
    getUser(login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>
        <div
          className="grid gird-cols-1 xl:grid-cols-3 lg:grid-cols-3 
        md:grid-cols-3 mb-8 md:gap-8"
        >
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="card image-full rounded-lg shadow-xl">
              <figure>
                <img src={avatar_url} alt="avatar" />
              </figure>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title mb-2">
                {name}
                <div className="ml-2 mr-1 badge badge-success">
                  {type ? type.toUpperCase() : ""}
                </div>
              </h1>
              <p>{bio}</p>

              <div className="mt-4 card-actions">
                <a className="btn btn-outline" href={html_url} target="_blank" rel="noopener noreferrer">
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfail;
