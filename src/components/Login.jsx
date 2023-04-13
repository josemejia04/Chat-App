import React from "react";

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const style = {
  main: `flex justify-center`,
  login: `text-white bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2 text-center`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const Login = () => {
  return (
    <div className={style.main}>
      <button className={style.login} onClick={googleSignIn}>
        login
      </button>
    </div>
  );
};

export default Login;
