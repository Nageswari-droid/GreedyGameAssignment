import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import bgColor from "../function/bgColor";
import AdName from "../Components/AdName";

function AdCard({ id, appName, publisherName }) {
  let RevenueValue = Math.floor(Math.random(500) * 500);
  let adRequestsValue = Math.floor(Math.random(100) * 100);
  let adResponseValue = Math.floor(Math.random(50) * 50);
  let impressionsValue = Math.floor(Math.random(50) * 50);

  const dashboardArr = [
    { title: "Revenue", worth: `$${RevenueValue}` },
    { title: "Ad requests", worth: `${adRequestsValue}M` },
    { title: "Ad Response", worth: `${adResponseValue}M` },
    { title: "Impressions", worth: `${impressionsValue}M` },
  ];
  const bgColorValue = bgColor();

  return (
    <NavLink to={`/app-details/${id}`}>
      <div className="w-full p-3 py-4 mx-auto my-4 bg-white border-2 rounded-md cursor-pointer xl:p-4 lg:p-4 md:p-4 sm:p-3 xs:p-3">
        <div className="flex flex-row items-center justify-between mx-auto w-1full xl:w-11/12 lg:w-11/12 md:w-full sm:w-11/12 xs:w-11/12">
          <div className="flex flex-row items-center">
            <AdName
              appName={appName}
              publisherName={publisherName}
              bgColorValue={bgColorValue}
            ></AdName>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-gray-400"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex items-center w-full pt-6 mx-auto xl:w-11/12 lg:w-11/12 md:w-full sm:w-full xs:w-11/12">
          {dashboardArr.length &&
            dashboardArr.map((items) => {
              const { title, worth } = items;
              return (
                <div
                  key={title}
                  className="flex flex-col w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/4 xs:w-1/4 card-profit"
                >
                  <div className="text-xs font-semibold text-black card-profit-title">
                    {title}
                  </div>
                  <div className="text-lg font-semibold card-profit-wroth xl:text-xl lg:text-xl md:text-xl sm:text-xl xs:text-lg">
                    {worth}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </NavLink>
  );
}

export default AdCard;
