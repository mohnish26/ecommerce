import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import myContext from "../../context/data/Mycontext";

const Productinfo = () => {
  const response = useContext(myContext);
  const { mode } = response;
  return (
    <Layout>
      <div
        className=" flex md:flex-row flex-col justify-center md:items-start items-center p-5 md:gap-10"
        style={{ color: mode === false ? "white" : "" }}
      >
        <img
          src="https://unsplash.com/photos/PDX_a_82obo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHx8fDE3MTIzODk1MjF8MA&force=true"
          alt="productImage" className="md:w-5/12 md:h-4/5 md:min-w-96   w-11/12 rounded-2xl object-center"
        />
        <div className="flex flex-col py-7 gap-5">
          <p className="text-xl text-gray-400">Brand Name</p>
          <h2 className="text-4xl">Product Name</h2>
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
              <div className="flex text-blue-600">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </div>
              <p style={{ color: mode === false ? "grey" : "" }}>4 Reviews</p>
            </div>

            <div className="flex gap-3">
              <FaFacebookF /> <FaTwitter /> <FaWhatsapp />{" "}
            </div>
          </div>
          <p className="md:max-w-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            illo doloribus amet reiciendis perspiciatis error aliquam
            consequatur natus molestias sit sequi voluptate dignissimos dicta,
            distinctio ipsa officiis placeat quae quaerat! Ducimus dolorum
            quisquam corrupti aliquam sint, dignissimos harum ex sunt,
            reiciendis quaerat sed animi fugit quo, eius culpa consequuntur modi
            nobis iure! Quam debitis delectus fugiat ullam, eius itaque
            voluptatem?
          </p>
          <span className="w-full h-0.5 bg-gray-300"></span>
          <div className="flex justify-between items-center">
            <span className="text-4xl text-bold">₹450.76</span>
            <div className="flex items-center gap-3 ">
              <button className="tex-4xl text-white bg-blue-700 py-2 px-7 rounded-lg">
                Add To Cart
              </button>
              <FcLike className="text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Productinfo;
