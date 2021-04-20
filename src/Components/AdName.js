import React from "react";

function AdName({ appName, publisherName, bgColorValue }) {
  return (
    <>
      <div
        className="p-4 rounded-sm xl:p-6 lg:p-6 md:p-6 sm:p-6 xs:p-4"
        style={{ backgroundColor: bgColorValue }}
      ></div>
      <div className="flex flex-col mx-4">
        <div className="text-xl font-semibold xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl app-name">
          {appName}
        </div>
        <div className="xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-xs publisher-name">
          {publisherName}
        </div>
      </div>
    </>
  );
}

export default AdName;
