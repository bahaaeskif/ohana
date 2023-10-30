import React from "react";
import p13 from "../Assets/1-3.jpg";
import p14 from "../Assets/1-4.jpg";
const Newarrival: React.FC = () => {
  return (
    <>
      <div className="px-8 sm:px-16 my-8">
        <h3 className="flex justify-center items-center text-white">
          <b className="w-[100%] h-[1px] bg-[#e6e6e6]"></b>
          <span className=" text-center px-6">NEW ARRIVAL</span>

          <b className="w-[100%] h-[1px] bg-[#e6e6e6]"></b>
        </h3>
      </div>

      <div className=" py-2 flex justify-center items-center gap-4 flex-wrap">
        <div className="text-white flex justify-center items-center flex-col basis-[100%] md:basis-[32%] ">
          <div className="mb-2 relative group">
            <img
              src={p13}
              alt=""
              className="w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-all duration-700"
            />
            <img
              src={p14}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 z-[-99]"
            />
          </div>
          <div className=" capitalize">
            <h3 className=" capitalize text-sm">jacket</h3>
          </div>
          <div>
            <h3>Long Sleeves Cropped Jacket</h3>
          </div>
        </div>
        <div className="text-white flex justify-center items-center flex-col basis-[100%] md:basis-[32%] ">
          <div className="mb-2 relative group">
            <img
              src={p13}
              alt=""
              className="w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-all duration-700"
            />
            <img
              src={p14}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 z-[-99]"
            />
          </div>
          <div className=" capitalize">
            <h3 className=" capitalize text-sm">jacket</h3>
          </div>
          <div>
            <h3>Long Sleeves Cropped Jacket</h3>
          </div>
        </div>
        <div className="text-white flex justify-center items-center flex-col basis-[100%] md:basis-[32%] ">
          <div className="mb-2 relative group">
            <img
              src={p13}
              alt=""
              className="w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-all duration-700"
            />
            <img
              src={p14}
              alt=""
              className="w-full h-full object-cover absolute top-0 left-0 z-[-99]"
            />
          </div>
          <div className=" capitalize">
            <h3 className=" capitalize text-sm">jacket</h3>
          </div>
          <div>
            <h3>Long Sleeves Cropped Jacket</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newarrival;
