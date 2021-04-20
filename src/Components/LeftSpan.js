import React from "react";
import "../style/App.css";
import imgOne from "../asset/asset1.svg";
import iconOne from "../asset/icon1.svg";
import iconTwo from "../asset/icon2.svg";
import iconThree from "../asset/icon3.svg";
import iconFour from "../asset/icon4.svg";

function LeftSpan() {
    
  const iconArr = [
    { icon: iconOne, title: "Fill Rate", key: "one" },
    { icon: iconTwo, title: "Improve CTR", key: "two" },
    { icon: iconThree, title: "Refresh Rate", key: "three" },
    { icon: iconFour, title: "Quick Integration", key: "four" },
  ];
  
  return (
    <div className="flex flex-col h-full xl:h-screen lg:h-screen md:h-screen sm:h-full xs:h-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full">
      <div className="justify-center w-full p-4 bg-indigo-500 h-1/2">
        <div className="font-sans text-lg font-semibold tracking-widest text-white h-1/5">
          ADSOUL
        </div>
        <div className="w-full mx-auto my-auto h-3/4">
          <img
            src={imgOne}
            alt="img-one"
            width="300"
            height="300"
            className="py-4 mx-auto"
          ></img>
        </div>
      </div>
      <div className="w-full p-8 bg-indigo-700 h-1/2 home-left-down">
        <div>
          <div className="py-2 font-sans text-xl font-semibold tracking-widest text-white">
            Revenue Optimization
          </div>
          <div className="flex flex-wrap items-center w-11/12 py-6">
            {iconArr.length > 0 ? (
              iconArr.map((items) => {
                const { icon, title, key } = items;
                return (
                  <div key={key} className="w-1/2 py-4">
                    <img src={icon} alt={icon}></img>
                    <div className="py-2 text-white">{title}</div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSpan;
