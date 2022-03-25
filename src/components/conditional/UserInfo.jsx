import React from "react";
import { If } from "./If";

const UserInfo = (props) => {
  const { user } = props;

  return (
    <div>
      <If test={user && user.name}>
        Welcome, <strong>{user.name}</strong>!
      </If>

      <If test={!user || !user.name}>
        Welcome, <strong>stranger</strong>!
      </If>
    </div>
  );
};

export { UserInfo };
