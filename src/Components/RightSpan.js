import React, { useEffect, useState } from "react";
import axios from "axios";
import AdCard from "./AdCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function RightSpan() {
  const [adArr, setAdArr] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/adf6676a313fa01f787d")
      .then((res) => {
        if (res && res.data) {
          setAdArr(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-full xl:h-screen lg:h-screen md:h-screen sm:h-full xs:h-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full">
      <div className="w-full h-auto py-4 bg-white shadow-md xl:h-1/6 lg:h-1/6 md:h-1/6 sm:h-auto xs:h-auto">
        <div className="flex flex-row items-end justify-between w-10/12 h-full mx-auto">
          <div className="items-center font-sans text-2xl font-semibold">
            Apps
          </div>
          <FontAwesomeIcon
            icon={faCog}
            className="items-center text-lg text-gray-400"
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="w-full py-6 overflow-auto bg-gray-100 xl:h-5/6 lg:h-5/6 md:h-5/6 sm:h-full xs:h-full">
        <div className="w-11/12 h-full mx-auto overflow-auto right-span-scroll xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 xs:w-10/12">
          <div className="w-full h-full mx-auto xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 xs:w-11/12">
            {adArr && adArr.length ? (
              adArr.map((items) => {
                const { id, appName, publisherName } = items;
                return (
                  <AdCard
                    key={id}
                    id={id}
                    appName={appName}
                    publisherName={publisherName}
                  ></AdCard>
                );
              })
            ) : (
              <div className="w-full h-full mx-auto">
                <div className="flex flex-col items-center justify-center w-3/4 h-full mx-auto my-auto text-2xl">
                  <div className="h-1/4"></div>
                  <div className="items-center w-full p-8 mx-auto my-auto text-center bg-white border-2 border-black border-dashed rounded-md h-1/4">Loading...</div>
                  <div className="h-1/4"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSpan;
