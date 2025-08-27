import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full md:p-9 p-3">
      <Image
        src={"/images/nav-logo.svg"}
        alt="logo"
        height={24}
        width={24}
        className="md:w-24 w-20"
        aria-label="logo"
      />
    </nav>
  );
};

export default Navbar;
