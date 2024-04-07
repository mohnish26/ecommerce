import React, { useContext } from "react";
import myContext from "../../context/data/Mycontext";

const Footer = () => {
  const response = useContext(myContext);
  const { mode } = response;
  return (
    <div className="w-full flex flex-col items-center bottom-0 text-center">
      <div
        className=" w-full flex md:justify-center md:gap-72 justify-between p-5   mt-9 bg-gray-200 "
        style={{
          backgroundColor: mode === false ? "#282c34" : "",
          color: mode === false ? "grey" : "",
        }}
      >
        <div className="flex md:w-1/4 flex-col gap-4">
          <h2 className="font-semibold">Categories</h2>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>Order</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="flex md:w-1/4 flex-col gap-3">
          <h2 className="font-semibold">Coutomer Service</h2>
          <ul className="flex flex-col gap-2">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="flex md:w-1/4 flex-col gap-3">
          <h2 className="font-semibold">Partner</h2>
          <ul className="flex flex-col gap-2">
            <li>Affiliat</li>
            <li>Refer</li>
            <li>Sell</li>
          </ul>
        </div>
      </div>
      <div className="px-20">
        <div className="p-2">
          <h1 className="text-xl  text-gray-600">Apna Store © 2024</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
