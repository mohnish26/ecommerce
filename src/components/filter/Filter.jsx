import React, { useContext } from "react";
import myContext from "../../context/data/Mycontext";

const Filter = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <div
        className="drop-shadow container mx-auto px-4 mt-5 bg-gray-200 flex flex-col rounded"
        style={{ backgroundColor: mode === false ? "#282c34" : "" ,
               color: mode === false ? "white" : ""}}
      >
        <div className="flex justify-between p-4">
          <p className="font-medium">Filters</p>
          <button className="px-2 bg-gray-50 hover:bg-gray-300 rounded text-gray-800 font-medium">
            Reset Filters
          </button>
        </div>
        <div className="flex gap-20 p-4 ">
          <select
            className="bg-gray-50 p-4 w-full rounded drop-shadow"
            style={{
              backgroundColor: mode === false ? "#282c34" : "",
              border: "0.5px solid white",
            }}
          >
            <option value="jacket">All</option>
            <option value="jacket">Jacket</option>
            <option value="shirt">shirt</option>
            <option value="mobile">mobile</option>
            <option value="jacket">Jacket</option>
          </select>

          <select
            className="bg-gray-50 p-4 w-full rounded drop-shadow"
            style={{
              backgroundColor: mode === false ? "#282c34" : "",
              border: "solid white 0.5px",
            }}
          >
            <option value="100">Any Price</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
