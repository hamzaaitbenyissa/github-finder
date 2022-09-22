import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserCard({ avatar, name }) {
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
        <h4 className="card-title">{name}</h4>
        <div className="card-actions">
          <Link
            to={"/users/" + name}
            className="btn btn-info btn-outline btn-sm "
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
