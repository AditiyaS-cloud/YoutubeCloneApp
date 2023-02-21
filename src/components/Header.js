import React from "react";
import menuImg from "../assets/download.png";
import youtubeLogo from "../assets/Youtube.png";
import usericon from "../assets/usericon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={menuImg}
        ></img>
        <a href="/">
          <img className="h-10 mx-2" alt="yotube-logo" src={youtubeLogo}></img>
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={usericon}></img>
      </div>
    </div>
  );
};

export default Header;
