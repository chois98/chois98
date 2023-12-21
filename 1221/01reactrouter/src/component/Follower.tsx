import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyusers: string;
}

const Follower = () => {
  const { nameOfMyusers } = useOutletContext<IFollowersContext>();

  return <div>Hrer are {nameOfMyusers}의 Followers</div>;
};

export default Follower;
