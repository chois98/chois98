import React from "react";
import { Outlet, useParams, Link, useOutletContext } from "react-router-dom";
import { users } from "../db";

const User = () => {
  console.log(useOutletContext());
  const { userId } = useParams();
  return (
    <div>
      <h1>
        user with it {userId} is name:{users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet
        context={{
          nameOfMyusers: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
};

export default User;
