import React from "react";

interface ButtonSliderProps {
  navigationRef: React.MutableRefObject<null>;
  isNext: boolean;
}
const ButtonSlider: React.FC<ButtonSliderProps> = ({
  navigationRef,
  isNext,
}) => {
  return (
    <button
      ref={navigationRef}
      className={` border-transparent text-transparent absolute ${
        isNext ? "right-8" : "left-8 "
      }
    group-hover:-translate-x-[20%] top-[50%] translate-y-[-50%] group-hover:border-[#fff] border-2 z-10 w-[40px] h-[40px] rounded-full group-hover:text-white hover:bg-[#272829]
    hover:border-[#272829] transition-all duration-400`}
    >
      <i
        className={`bx ${
          isNext ? "bx-chevron-right" : "bx-chevron-left "
        }  text-3xl`}
      ></i>
    </button>
  );
};

export default ButtonSlider;
