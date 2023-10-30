import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full mt-24 text-sm">
        <div
          className="
    h-[1px]
    max-w-[650px]
    my-[10px]
    mx-auto
bg-white
    "
        ></div>
        <div className=" mt-4 mx-auto flex justify-center items-center gap-2">
          {[1, 2, 3, 4].map(() => {
            return (
              <ul className="px-8 pb-8 flex flex-col justify-center items-center text-white w-fit uppercase ">
                <li className="mb-6">help</li>
                <li className="mb-6">pravcy policy</li>
                <li>faq</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
