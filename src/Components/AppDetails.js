import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import bgColor from "../function/bgColor";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AdName from "../Components/AdName";
import Loading from "../Components/Loading";

const bgColorValue = bgColor();

const appHeading = [
  "Date",
  "Revenue",
  "Ad Request",
  "Ad Responses",
  "Impressions",
  "Clicks",
  "Render Rate",
];

function AppDetails() {
  const [appDetails, setAppDetails] = useState([]);
  const [appName, setAppName] = useState("");
  const [publisherName, setPublisherName] = useState("");
  let { appId } = useParams();
  useEffect(() => {
    axios
      .get("https://api.npoint.io/adf6676a313fa01f787d")
      .then((res) => {
        if (res && res.data) {
          res.data.forEach((items) => {
            const { id, appName, publisherName } = items;
            if (appId === id) {
              setAppName(appName);
              setPublisherName(publisherName);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://api.npoint.io/baf8dba5974d29aa094b/${appId}`)
      .then((res) => {
        if (res && res.data) {
          setAppDetails(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [appId]);

  return (
    <div>
      <div className="p-6 font-sans text-base font-semibold tracking-widest text-white bg-indigo-500">
        ADSOUL
      </div>

      <div className="p-10">
        {appName && publisherName ? (
          <div className="flex flex-row items-center w-10/12 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-3/4">
            <NavLink to="/" className="w-1/12">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-gray-400 cursor-pointer hover:text-gray-600"
              ></FontAwesomeIcon>
            </NavLink>
            <div className="flex flex-row items-center w-full">
              <AdName
                appName={appName}
                publisherName={publisherName}
                bgColorValue={bgColorValue}
              ></AdName>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {appDetails && appDetails.length > 0 ? (
        <>
          <div className="px-10 app-details-desktop-view">
            <div className="border-2 border-gray-100 rounded-md">
              <div className="flex flex-row items-center justify-center w-full py-4 font-semibold text-center">
                {appHeading.length > 0 ? (
                  appHeading.map((items) => {
                    return (
                      <div
                        key={items}
                        className="w-1/2 xl:w-1/5 lg:w-1/4 md:w-1/2"
                      >
                        {items}
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              {appDetails && appDetails.length > 0 ? (
                appDetails.map((items) => {
                  const {
                    date,
                    revenue,
                    adRequest,
                    adResponse,
                    impressions,
                    clicks,
                  } = items;

                  let renderRate = Math.floor(
                    (impressions / adResponse) * 1000
                  );

                  return (
                    <div key={`date-${date} clicks-${clicks * 10}`} className="flex flex-row items-center justify-center w-full py-4 text-center">
                      <div className="w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3">
                        {date}
                      </div>
                      <div className="w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3">
                        {revenue}
                      </div>
                      <div className="w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3">
                        {adRequest}
                      </div>
                      <div className="w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3">
                        {adResponse}
                      </div>
                      <div className="w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3">
                        {impressions}
                      </div>
                      <div className="w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3">
                        {clicks}
                      </div>
                      <div className="w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3">
                        {renderRate}%
                      </div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="w-full px-10 app-details-mobile-view">
            <div className="w-full">
              <div className="flex flex-row flex-wrap justify-center w-full py-4">
                {appDetails.length > 0 && appDetails ? (
                  appDetails.map((items) => {
                    const {
                      date,
                      revenue,
                      adRequest,
                      adResponse,
                      impressions,
                      clicks,
                    } = items;

                    let renderRate = Math.floor(
                      (impressions / adResponse) * 1000
                    );

                    let borderValue = bgColor();

                    return (
                      <div className="w-full p-4 m-4 bg-white rounded-md shadow-md cursor-pointer xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/3 xs:w-3/4 hover:shadow-sm" style={{
                          border:`2px dashed ${borderValue}`
                      }} key={`date-${date} clicks-${clicks * 10}`}>
                        <div
                          className="p-3 font-semibold text-center"
                          style={{ fontSize: "18px" }}
                        >
                          {date}
                        </div>
                        <div className="p-4 font-sans text-base">
                          <div className="mobile-font">
                            <span className="font-bold">Revenue :</span> {revenue}
                          </div>
                          <div className="mobile-font">
                            <span className="font-bold">Ad Request :</span> {adRequest}
                          </div>
                          <div className="mobile-font">
                            <span className="font-bold">Ad Response :</span> {adResponse}
                          </div>
                          <div className="mobile-font">
                            <span className="font-bold">Impression :</span> {impressions}
                          </div>
                          <div className="mobile-font">
                            <span className="font-bold">Clicks :</span> {clicks}
                          </div>
                          <div className="mobile-font">
                            <span className="font-bold">Render Rate :</span> {renderRate}%
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Loading></Loading>
        </div>
      )}
    </div>
  );
}

export default AppDetails;
