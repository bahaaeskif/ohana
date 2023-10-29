import React from "react";

const Navbar: React.FC = () => {
  const [toggel, setToggle] = React.useState(false);
  return (
    <header className=" absolute top-0 left-0 w-full z-[99999] p-3">
      <nav className=" justify-between items-center text-white hidden md:flex ">
        <ul className=" list-none m-0 flex justify-center items-center gap-2">
          <li>New-in</li>
          <li>Teenagers</li>
          <li>Women</li>
        </ul>
        <h1 className="text-3xl mr-12">OHANA</h1>
        <ul className=" list-none m-0 flex justify-center items-center gap-2 text-2xl ">
          <li className="ml-4">
            <i className="bx bxs-user"></i>
          </li>
          <li className="ml-4">
            <i className="bx bx-search-alt-2"></i>
          </li>
          <li className="ml-4">
            <i className="bx bxs-cart-alt"></i>
          </li>
        </ul>
      </nav>

      {!toggel && (
        <nav className=" justify-between items-center text-white flex md:hidden ">
          <ul className=" list-none m-0  text-2xl flex justify-center items-center gap-2">
            <li onClick={() => setToggle((pre) => !pre)}>
              <i className="bx bx-menu"></i>
            </li>
          </ul>
          <h1 className="text-3xl">OHANA</h1>
          <ul className=" list-none m-0 flex justify-center items-center gap-2 text-2xl ">
            <li className="ml-4">
              <i className="bx bxs-cart-alt"></i>
            </li>
          </ul>
        </nav>
      )}
      {toggel && (
        <div className=" fixed top-0 left-0 z-[999] w-full h-full bg-[#0009] flex justify-center items-center flex-col">
          <div
            className="fixed top-2 right-2 z-[999] text-white text-3xl"
            onClick={() => setToggle((pre) => !pre)}
          >
            <i className="bx bx-x"></i>
          </div>
          <ul className="text-white flex flex-col justify-center items-center text-3xl gap-12">
            <li>New-in</li>
            <li>Teenagers</li>
            <li>Women</li>
            <li>Men</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
