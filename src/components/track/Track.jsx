import React, { useContext } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import myContext from "../../context/data/Mycontext";
const Track = () => {
  const response = useContext(myContext);
  const { mode } = response;
  return (
    <div className=" my-9 w-full flex md:flex-row flex-col items-center justify-center sm:gap-20 md:gap-30 lg:gap-40 gap-5 text-center ">
      <div
        className="md:w-1/5 flex  w-4/5 flex-col  bg-gray-200 p-5 items-center rounded-lg border-solid border-2 border-rose-600"
        style={{
          backgroundColor: mode === false ? "#282c34" : "",
          color: mode === false ? "white" : "",
        }}
      >
        <TbTruckDelivery className="sm:text-4xl text-xl text-rose-600 mb-3.5 " />
        <h2 className="sm:text-xl text-sm">Premium T-shirts</h2>
        <p className="sm:text-lg text-sm text-gray-500">Our T-shirts are 100% cotton</p>
      </div>

      <div
        className="md:w-1/5 flex  w-4/5 flex-col bg-gray-200 p-5 items-center rounded-lg border-solid border-2 border-rose-600"
        style={{
          backgroundColor: mode === false ? "#282c34" : "",
          color: mode === false ? "white" : "",
        }}
      >
        <FaShoppingBag className="sm:text-4xl text-xl text-rose-600 mb-3.5" />
        <h2 className="sm:text-xl text-sm">Free shipping</h2>
        <p className="sm:text-lg text-sm text-gray-500">We ship all over india</p>
      </div>
      <div
        className="md:w-1/5 flex w-4/5 flex-col bg-gray-200 p-5 items-center rounded-lg border-solid border-2 border-rose-600"
        style={{
          backgroundColor: mode === false ? "#282c34" : "",
          color: mode === false ? "white" : "",
        }}
      >
        <LuIndianRupee className="sm:text-4xl text-xl text-rose-600 mb-3.5" />
        <h2 className="sm:text-xl text-sm">Exciting offer</h2>
        <p className="sm:text-lg text-sm text-gray-500">
          We provide amazing offers and discounts
        </p>
      </div>
    </div>
  );
};

export default Track;
