import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";
import { FaCodepen, FaUserFriends, FaUsers } from "react-icons/fa";
import ReopList from "../repos/RepoList";

function UserProfail() {
  let { login } = useParams();
  const { getUser, user, getUserRepos, userrepos } = useContext(GithubContext);

  // this function will be executed once the componenet is created and
  useEffect(() => {
    getUser(login);
    getUserRepos(login);
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
                <a
                  className="btn btn-outline"
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}

              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}

              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-pink-600">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-pink-600">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-pink-600">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
        </div>
        <ReopList repos={userrepos}></ReopList>
      </div>
    </>
  );
}

export default UserProfail;
