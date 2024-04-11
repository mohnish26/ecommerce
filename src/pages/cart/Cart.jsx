import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { FaRegTrashAlt } from "react-icons/fa";
import myContext from "../../context/data/Mycontext";

const Cart = () => {
  const response = useContext(myContext);
  const { mode } = response;
  return (
    <Layout>
      <div className="md:p-10 p-3">
        <div className="flex justify-center">
          <h2
            className="lg:text-3xl md:text-lg font-bold"
            style={{ color: mode === false ? "white" : "" }}
          >
            Cart items
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col justify-between md:p-10 gap-10">
          <div
            className="lg:w-6/12 flex md:flex-row flex-col  gap-10 p-5 bg-gray-100 rounded-2xl drop-shadow-lg  items-center"
            style={{
              backgroundColor: mode === false ? "rgb(28 25 23)" : "",
              color: mode === false ? "white" : "",
            }}
          >
            <div className="md:w-50 md:min-w-52 md:h-50 w-full rounded">
              <img
                src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craig-dennis-205421.jpg&fm=jpg&h=400&w=600&fit=crop"
                alt="product"
                className="rounded-2xl"
              />
            </div>

            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="font-bold lg:text-2xl md:text-lg ">
                  Product Name
                </h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <span className="lg:text-xl md:text-base">₹490</span>
              </div>
              <div>
                <button className="lg:text-2xl md:text-xl">
                  <FaRegTrashAlt  className="text-red-600"/>
                </button>
              </div>
            </div>
          </div>
          <div
            className=" flex flex-col justify-center gap-7 bg-gray-100 lg:w-1/4 lg:text-3xl md:text-xl p-10 rounded-xl drop-shadow-lg"
            style={{
              backgroundColor: mode === false ? "rgb(28 25 23)" : "",
              color: mode === false ? "white" : "",
            }}
          >
            <div className="flex justify-between">
              <span>subtotal</span>
              <span>₹490</span>
            </div>
            <div className="flex justify-between">
              <span>shiping</span>
              <span>₹10</span>
            </div>
            <span className="h-0.5 w-full bg-gray-400"></span>
            <div className="flex  font-bold justify-between">
              <span>Total</span>
              <span>₹500</span>
            </div>

            <button className="bg-blue-500 p-4 rounded-2xl text-white ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
