import React from "react";

const style = {
  nav: `bg-teal-900 h-20 flex justify-between items-center p-4 rounded-t`,
  heading: `text-white text-3xl font-bold`,
};

const Navbar = () => {
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>🐦flock</h1>
    </div>
  );
};

export default Navbar;
