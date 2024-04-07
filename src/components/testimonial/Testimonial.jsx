import React, { useContext } from "react";
import myContext from "../../context/data/Mycontext";

const Testimonial = () => {
  const response = useContext(myContext);
  const { mode } = response;
  return (
    <div
      className="flex flex-col gap-5 p-5 items-center "
      style={{ color: mode === false ? "white" : "" }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold">Testimonial</h2>
        <p className="text-2xl font-semibold">
          What our <span className="text-rose-600">coustomer</span> saying
        </p>
      </div>
      <div className=" flex md:flex-row flex-col items-center gap-10">
        <div className="w-1/3 md:max-w-[500px] w-4/5 flex flex-col gap-5 items-center text-center">
          <img
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-2381069.jpg&fm=jpg&w=200&h=120"
            alt="users"
            className="w-24 h-24 object-cover rounded-full object-center"
          />
          <p>
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware.
          </p>
          <span className="w-14 h-1 bg-rose-600 rounded"></span>
          <h2>Amelia Brown</h2>
        </div>
        <div className=" w-1/3 md:max-w-[500px] w-4/5 flex flex-col gap-5 items-center text-center">
          <img
            src="https://images.pexels.com/photos/20798138/pexels-photo-20798138.jpeg?cs=srgb&dl=pexels-david-gari-20798138.jpg&fm=jpg&w=200&h=120"
            alt="users"
            className="w-24 h-24 object-cover object-center rounded-full"
          />

          <p>
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware.
          </p>
          <span className="w-14 h-1 bg-rose-600 rounded"></span>
          <h2>Jack Johnson</h2>
        </div>
        <div className=" w-1/3 md:max-w-[500px] w-4/5 flex flex-col gap-5 items-center text-center">
          <img
            src="https://images.pexels.com/photos/18312788/pexels-photo-18312788.jpeg?cs=srgb&dl=pexels-george-chambers-18312788.jpg&fm=jpg&w=200&h=120"
            alt="users"
            className="w-24 h-24 object-cover object-center rounded-full"
          />
          <p>
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware.
          </p>
          <span className="w-14 h-1 bg-rose-600 rounded"></span>
          <h2>Eloise Miller</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
