import React from "react";
import p13 from "../Assets/1-3.jpg";
const Choice: React.FC = () => {
  return (
    <>
      <div className="px-8 sm:px-16 my-8">
        <h3 className="flex justify-center items-center text-white">
          <b className="w-[100%] h-[1px] bg-[#e6e6e6]"></b>
          <span className=" text-center px-6">YourChoice</span>

          <b className="w-[100%] h-[1px] bg-[#e6e6e6]"></b>
        </h3>
      </div>

      <div className=" py-2 flex justify-center items-center gap-4 flex-wrap">
        {[1, 2, 3, 4].map(() => {
          return (
            <div className="text-white flex justify-center items-center flex-col basis-[100%] md:basis-[20%] relative group">
              <div className="mb-2 relative ">
                <img src={p13} alt="" className="w-full h-full object-cover" />
              </div>
              <div
                className=" capitalize absolute top-0 left-0 w-full h-full bg-[#0000001c]
         flex items-center justify-center group-hover:opacity-0 transition-all"
              >
                <h3 className="uppercase text-2xl">jacket</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Choice;
