import React from "react";
import { If, Else } from "./If";

const UserInfo = (props) => {
  const { user } = props;

  return (
    <div>
      <If test={user && user.name}>
        Welcome, <strong>{user.name}</strong>!
        <Else>
          Welcome, <strong>stranger</strong>!
        </Else>
      </If>
    </div>
  );
};

export { UserInfo };
