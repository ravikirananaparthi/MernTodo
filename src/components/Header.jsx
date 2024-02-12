import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

function Header(props) {
  const { isAuthenticated, setAthu, loader, setLoader } = useContext(Context);
  // Handle form submission
  const logOutHandler = async () => {
    setLoader(true);
    try {
      // Here you can add logic to register the user

      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success("Logged Out Successfully");
      setAthu(false);
      setLoader(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setAthu(false);
      console.log(true);
    }
  };
  return (
    <div>
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4 bg-purple-500">
        {/** Heading */}
        <div className="flex items-center">
          <Link to={"/"}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-white flex items-center">
              <span className="mr-2 text-white text-lg sm:text-xl lg:text-2xl transition duration-300 ease-in-out transform hover:scale-110">
                📝
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                To<span className="text-white">Do</span>List
              </span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to={"/"}>
            <span className="text-white hover:bg-purple-700 px-3 py-2 rounded transition duration-300 ease-in-out hover:scale-110">
              Home
            </span>
          </Link>
          <Link to={"/profile"}>
            <span className="text-white hover:bg-purple-700 px-3 py-2 rounded transition duration-300 ease-in-out hover:scale-110">
              Profile
            </span>
          </Link>
          {isAuthenticated ? (
            <button disabled={loader}
              className="text-white hover:bg-purple-700 px-3 py-2 rounded transition duration-300 ease-in-out hover:scale-110"
              onClick={logOutHandler}
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <span className="text-white hover:bg-purple-700 px-3 py-2 rounded transition duration-300 ease-in-out hover:scale-110">
                Login
              </span>
            </Link>
          )}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-white">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
