import ServiceCard from "./ServiceCard";
import whatWeDoData from "../../data/whatwedo";

const WhatWeDo = () => {
  return (
    <div className="bg-black py-24 pt-36">
      <div className="fit-container flex justify-between place-items-baseline">
        <h2 className="text-white text-[4rem] ">What We Do</h2>
        <p className="text-blue-700 hover:text-white transition-colors text-xl flex gap-2 items-center cursor-pointer more-project">
          More{" "}
          <i className="fi fi-sr-arrow-alt-right flex -maa-rotate-[45deg] text-2xl maa-transition-[0.4s]"></i>
        </p>
      </div>
      <div className="w-full h-max pt-10">
        <div
          className="what-we-do-grid-container grid grid-cols-5 border-[0.2px] outline-none border-l-0 border-r-0 grid-rows-1 h-[450px]"
          style={{ borderColor: "rgba(255, 255, 255, 0.7)" }}
        >
          {(whatWeDoData || []).map((data, i, arr) => (
            <ServiceCard shouldHaveBorder={i < arr.length - 1} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
