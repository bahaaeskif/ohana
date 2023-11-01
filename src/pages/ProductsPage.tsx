import React from "react";
import Product from "../Common/product";
import p13 from "../Assets/1-3.jpg";
import p14 from "../Assets/1-4.jpg";
const ProductsPage: React.FC = () => {
  return (
    <div className="mt-14">
      <div className=" flex justify-center items-center w-full bg-black text-white text-center text-2xl py-4 gap-1 mb-16">
        Filter<i className="bx bx-filter-alt"></i>
      </div>
      <div className="md:max-w-[1200px] mx-auto">
        <div className=" flex  items-center gap-4 flex-wrap ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return (
              <Product
                img1={p13}
                img2={p14}
                style="basis-[100%] md:basis-[32%] text-black"
                category="jacket"
                title="Long Sleeves Cropped Jacket"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
