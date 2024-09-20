import React, { useState } from "react";
import Link from "next/link";


const UserMenu: React.FC = () => {


  return (
    <div className="flex items-center gap-2 w-[269px]">
      <Link href="#" aria-label="Sign in page">
        <button
          aria-label="Sign in"
          className="flex items-center space-x-2 text-white bg-primary hover:bg-white hover:text-primary font-bold rounded-md px-8 py-2"
        >
          <span>LOGIN</span>
        </button>
      </Link>
      <Link href="#" aria-label="Sign up page">
        <button
          aria-label="Register"
          className="flex items-center space-x-2 text-primary bg-white hover:text-white hover:bg-primary font-bold rounded-md px-8 py-2"
        >
          <span>REGISTER</span>
        </button>
      </Link>
    </div>
  );
};

export default UserMenu;
