import React from "react";
import { auth } from "../firebase";

const style = {
  logout: `text-white bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2 text-center`,
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={() => auth.signOut()} className={style.logout}>
      Logout
    </button>
  );
};

export default LogOut;
