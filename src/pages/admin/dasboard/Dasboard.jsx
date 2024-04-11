import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";
import Layout from "../../../components/layout/Layout";
import myContext from "../../../context/data/Mycontext";

const Dasboard = () => {
  const response = useContext(myContext);
  const { mode } = response;
  return (
    <Layout>
      <div
        className="flex md:flex-row flex-col justify-between lg:p-20 md:p-10 p-5  text-center gap-5"
        style={{ color: mode === false ? "white" : "" }}
      >
        <div className=" p-5 md:w-1/5 w-full flex flex-col items-center gap-5 border-solid border-2 border-blue-700 rounded-xl">
          <TbPaperBag className="text-5xl" />
          <span className="text-2xl font-semibold">10</span>
          <p>Total Products</p>
        </div>
        <div className=" p-5 md:w-1/5 w-full flex flex-col items-center gap-5 border-solid border-2 border-blue-700 rounded-xl">
          <MdAddShoppingCart className="text-5xl " />
          <span className="text-2xl font-semibold">12</span>
          <p>Total Order</p>
        </div>
        <div className="p-5 md:w-1/5 w-full flex flex-col items-center gap-5 border-solid border-2 border-blue-700 rounded-xl">
          <FaUserAlt className="text-5xl" />
          <span className="text-2xl font-semibold">20</span>
          <p>Total User</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dasboard;
