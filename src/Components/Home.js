import React from "react";
import LeftSpan from "./LeftSpan";
import RightSpan from "./RightSpan";

function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col">
        <LeftSpan></LeftSpan>
        <RightSpan></RightSpan>
      </div>
    </div>
  );
}

export default Home;
