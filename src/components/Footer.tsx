import React from "react";
import { useState } from "react";
const links = [
  { id: 1, title: "test", content: ["help", "privcy poilcy", "faq"] },
  { id: 2, title: "test", content: ["help", "privcy poilcy", "faq"] },
  { id: 3, title: "test", content: ["help", "privcy poilcy", "faq"] },
];

const Footer: React.FC = () => {
  const [expand, setExpand] = useState<number | null>(null);

  const handelExpand = (id: number) => {
    setExpand((pre) => {
      if (pre === id) {
        return null;
      } else {
        return id;
      }
    });
  };

  return (
    <>
      <div className="hidden sm:flex  bg-[#1b1b1b]">
        <div className="w-full mt-24 text-sm">
          <div className="h-[1px] max-w-[650px] my-[10px] mx-auto bg-white"></div>
          <div className=" mt-4 mx-auto flex justify-center items-center gap-2">
            <ul className="px-8 pb-8 flex flex-col justify-center items-center text-white w-fit uppercase ">
              <li className="mb-6">help</li>
              <li className="mb-6">pravcy policy</li>
              <li>faq</li>
            </ul>
            <ul className="px-8 pb-8 flex flex-col justify-center items-center text-white w-fit uppercase ">
              <li className="mb-6">stores</li>
              <li className="mb-6">Contacts</li>
              <li>about</li>
            </ul>
            <ul className="px-8 pb-8 flex flex-col justify-center items-center text-white w-fit uppercase ">
              <li className="mb-6">delevery</li>
              <li className="mb-6">return</li>
              <li>exchange</li>
            </ul>
            <ul className="px-8 pb-8 flex flex-col justify-center items-center text-white w-fit uppercase ">
              <li className="mb-6 text-xl">follow us</li>
              <li className="mb-6">instagram</li>
              <li>tiktok</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 sm:hidden text-white my-20">
        {links.map((link) => {
          return (
            <>
              <div
                key={link.id}
                onClick={() => {
                  handelExpand(link.id);
                }}
                className=" relative py-4 px-8 w-full text-center border-t-[1px] border-[#eee]"
              >
                <div className=" relative">
                  <i
                    className={`text-3xl bx 
                    absolute top-[50%] translate-y-[-50%] left-[-20px]`}
                  ></i>
                  <div className="title inline-block">{link.title}</div>
                </div>
              </div>
              {link.id === expand ? (
                <div className="content text-xl text-center uppercase">
                  {link.content.map((x, index) => {
                    return (
                      <div className={`${index === 0 ? "pb-4" : "py-4"}`}>
                        {x}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
