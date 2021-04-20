import React from "react";

function Loading() {
  return (
    <div className="w-full h-full mx-auto">
      <div className="flex flex-col items-center justify-center w-3/4 h-full mx-auto my-auto text-2xl">
        <div className="h-1/4"></div>
        <div className="items-center w-full p-8 mx-auto my-auto text-center bg-white border-2 border-black border-dashed rounded-md h-1/4">
          Loading...
        </div>
        <div className="h-1/4"></div>
      </div>
    </div>
  );
}

export default Loading;
