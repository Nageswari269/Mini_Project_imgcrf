import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../assets";

let Auth = () => {
  return (
    <div className="w-[100vw] h-[100vh] sm:flex">
      <div className=" hidden sm:block sm:w-[60%] sm:flex sm:items-center sm:justify-center  bg-gradient-to-r from-[#dd3675] via-[#d8363a] to-[#dd3675] ">
        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
          <h4 className="mb-6 text-xl sm:text-2xl font-semibold">
            Image Crafter
          </h4>
          <p className="text-sm w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/* /////////// */}
      <div className="h-[100vh] sm:w-[40%] flex items-center justify-center ">
        <div>
          <img className="mx-auto w-48 mb-12" src={auth} alt="logo" />
          <h1 className="text-center text-xl font-bold">LOG IN</h1>
          <form>
            <div className="mt-6">
              <p>Email</p>
              <input
                required
                type="email"
                className="w-full outline-none border-b-black border-2 border-t-transparent border-l-transparent border-r-transparent "
              />
            </div>
            <div className="mt-6">
              <p>Password</p>
              <input
                required
                type="password"
                className="w-full outline-none border-b-black border-2 border-t-transparent border-l-transparent border-r-transparent"
              />
            </div>

            <div className="mt-6 pb-1 pt-1 text-center">
              <Link
                to="/home"
                className="mb-3 bg-gradient-to-r from-[#dd3675] via-[#e50611] to-[#dd3675] inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="button"
              >
                Log In
              </Link>
            </div>

            <div className=" mt-6 flex items-center justify-between pb-6">
              <p className="mb-0 mr-2">Don't have an account?</p>
              <button
                type="button"
                className=" hover:bg-gradient-to-r hover:from-[#dd3675] via-[#e50611] to-[#dd3675] inline-block rounded border-2 b px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal  transition duration-150 ease-in-out "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
