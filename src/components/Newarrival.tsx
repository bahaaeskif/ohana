import React from "react";
import p13 from "../Assets/1-3.jpg";
import p14 from "../Assets/1-4.jpg";
import Product from "../Common/product";
const Newarrival: React.FC = () => {
  return (
    <>
      <div className="px-8 sm:px-16 my-8 bg-[#1b1b1b]">
        <h3 className="flex justify-center items-center text-white">
          <b className="w-[100%] h-[1px] bg-[#e6e6e6]"></b>
          <span className=" text-center px-6">NEW ARRIVAL</span>

          <b className="w-[100%] h-[1px] bg-[#e6e6e6]"></b>
        </h3>
      </div>

      <div className=" py-2 flex justify-center items-center gap-4 flex-wrap ">
        <Product
          img1={p13}
          img2={p14}
          style="basis-[100%] md:basis-[32%]"
          category="jacket"
          title="Long Sleeves Cropped Jacket"
        />
        <Product
          img1={p13}
          img2={p14}
          style="basis-[100%] md:basis-[32%]"
          category="jacket"
          title="Long Sleeves Cropped Jacket"
        />
        <Product
          img1={p13}
          img2={p14}
          style="basis-[100%] md:basis-[32%]"
          category="jacket"
          title="Long Sleeves Cropped Jacket"
        />
      </div>
    </>
  );
};

export default Newarrival;
