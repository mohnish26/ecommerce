import React, { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import myContext from "../../context/data/Mycontext";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
const Navbar = () => {
  const context = useContext(myContext);
  const { mode, toggel } = context;

  const user = localStorage.getItem('user')

  const logout =() =>{
    localStorage.clear('user')
    window.location.href = "/"
  }

  return (
    <div className=" drop-shadow-lg flex justify-between bg-amber-400 items-center p-3 w-full">
      <div className="sm:text-2xl text-sm">
        <NavLink to="/">Your Logo</NavLink>
      </div>

      <div className="flex">
        <input
          className=" w-3/4 p-2 outline-none rounded-l-lg"
          placeholder="Product.."
          type="search"
          style={{
            backgroundColor: mode === false ? "#282c34" : "",
            color: mode === false ? "grey" : "",
          }}
        />
        <button
          className="sm:text-2xl text-base bg-white p-2 rounded-r-lg"
          style={{
            backgroundColor: mode === false ? "#282c34" : "",
            color: mode === false ? "grey" : "",
          }}
        >
          <CiSearch />
        </button>
      </div>

      <div>
        <ul className="flex sm:gap-10 gap-4 sm:text-3xl text-lg text-center items-center">
          <li>
            <NavLink to="/like">
              <FcLike />
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart">
              <LuShoppingCart />
            </NavLink>
          </li>
          
            {
              user?.user?.email === 'admin@admin.com' ? <li><NavLink to="/dashboard">
              <CgProfile />
            </NavLink> </li>: ""
            }
          
          <li className="flex items-center">
            {
              user?  <button onClick={logout}><RiLogoutCircleLine className="text-red-600"/> </button>: <NavLink to='/login'><IoIosLogIn className=" font-bold text-green-600"/></NavLink>
            }
          </li>
          <li className="items-center ">
            <button onClick={toggel}>
              {mode ? <MdDarkMode /> : <MdOutlineWbSunny />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
