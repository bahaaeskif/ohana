import React from "react";

interface ProductProps {
  img1: string;
  img2: string;
  style: string;
  price?: string;
  category: string;
  title: string;
}
const Product: React.FC<ProductProps> = ({
  img1,
  img2,
  style,
  price,
  category,
  title,
}) => {
  return (
    <div
      className={`text-white flex justify-center items-center flex-col ${style}  `}
    >
      <div className="mb-2 relative group">
        <img
          src={img1}
          alt=""
          className="w-full h-full relative z-10 object-cover opacity-100 group-hover:opacity-0 transition-all duration-700"
        />
        <img
          src={img2}
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-100"
        />
      </div>
      <div className=" capitalize">
        <h3 className=" capitalize text-sm">{category}</h3>
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Product;
