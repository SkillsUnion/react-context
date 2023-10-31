import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

function Profile() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div className="navbar">
        <Link to="edit">Edit Profile</Link>
        <Link to="view">View Profile</Link>
      </div>
      <h1>Profile</h1>
      <h3>Welcome back {user.email}</h3>
      <Outlet />
    </>
  );
}

export default Profile;
