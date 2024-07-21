import React, { useState } from "react";
import TimeTrackerIcon from "./components/TimeTrackerIcon";
import Popup from "./components/Popup";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-[#7e7b7b] bg-opacity-80 overflow-hidden  w-full justify-center items-center relative h-screen flex flex-col">
      <TimeTrackerIcon setShowPopup={setShowPopup} />
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default App;
