import React from "react";
import circleicon from "../assets/circleicon1.png";
const TimeTrackerIcon = ({ setShowPopup }) => {
  return (
    <div className={` bounce w-full h-full flex justify-end items-end p-16`}>
      <div
        className={` w-20 h-20 bg-[#D9D9D9] rounded-[50%] flex items-center justify-center cursor-pointer box-shadow`}
        onClick={() => {
          setShowPopup(true);
        }}
      >
        <img src={circleicon} alt="Time Widget" />
      </div>
    </div>
  );
};

export default TimeTrackerIcon;
