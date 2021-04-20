import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import bgColor from "../function/bgColor";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AdName from "../Components/AdName";

const bgColorValue = bgColor();

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
  });

  return (
    <div>
      <div className="p-6 font-sans text-base font-semibold tracking-widest text-white bg-indigo-500">
        ADSOUL
      </div>

      <div className="p-10">
        {appName && publisherName ? (
          <div className="flex flex-row items-center w-1/3">
            <NavLink to="/" className="w-1/6">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-gray-400 cursor-pointer hover:text-gray-600"
              ></FontAwesomeIcon>
            </NavLink>
            <div className="flex flex-row items-center w-3/4">
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
      <div className="px-10">
        {appDetails && appDetails.length > 0 ? (
          appDetails.map((items) => {
            const {
              date,
              clicks,
              revenue,
              adRequest,
              adResponse,
              impressions,
            } = items;
            console.log(
              date,
              clicks,
              revenue,
              adRequest,
              adResponse,
              impressions
            );
            return <div></div>;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default AppDetails;
