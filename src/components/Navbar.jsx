import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Logout from "./Logout";

const style = {
  nav: `bg-teal-900 h-20 flex justify-between items-center p-4 rounded-t`,
  heading: `text-white text-3xl font-bold`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  //console.log(user);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>🐦flock</h1>
      {user ? <Logout /> : <Login />}
    </div>
  );
};

export default Navbar;
