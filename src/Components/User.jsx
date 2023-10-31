import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
function User() {
  const params = useParams();
  const user = useContext(UserContext);

  return (
    <>
      <h1>Welcome back </h1>
      <h3>
        You are logged in as: {user.email} - your current uid is {user.uid}
      </h3>
      <h4>You are viewing {params.username}s page</h4>
    </>
  );
}

export default User;
