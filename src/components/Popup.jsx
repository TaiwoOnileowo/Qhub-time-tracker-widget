import React, { useState, useEffect } from "react";
import CircleProgressBar from "./CircleProgressBar";
import { quotes } from "../quotes";

const calculatePercentage = (current, total) =>
  ((current / total) * 100).toFixed(0);
const roundToNearestTenth = (value) => Math.round(value / 10) * 10;

const Popup = ({ setShowPopup }) => {
  const [percentageYear, setPercentageYear] = useState(0);
  const [semesterPercentage, setSemesterPercentage] = useState(null);
  const [randomQuote, setRandomQuote] = useState("");
  const [semester, setSemester] = useState("");
  const [percentageWeek, setPercentageWeek] = useState(0);

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));
  useEffect(() => {
    const calculateYearPercentage = () => {
      const totalDays = 365;
      setPercentageYear(calculatePercentage(dayOfYear, totalDays));
    };

    const calculateSemesterPercentage = () => {
      const OMEGA_START = 79,
        OMEGA_END = 201;
      const ALPHA_START = 269,
        ALPHA_END = 82;

      const getSemesterPercentage = (startDate, endDate) => {
        const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
        const daysPassed = (now - startDate) / (1000 * 60 * 60 * 24);
        setSemesterPercentage(calculatePercentage(daysPassed, totalDays));
      };

      if (dayOfYear >= OMEGA_START && dayOfYear <= OMEGA_END) {
        const startDate = new Date(now.getFullYear(), 2, 20); // March 20
        const endDate = new Date(now.getFullYear(), 6, 20); // July 20
        getSemesterPercentage(startDate, endDate);
        setSemester("Omega");
      } else if (
        (dayOfYear >= ALPHA_START && dayOfYear <= 365) ||
        (dayOfYear >= 0 && dayOfYear <= ALPHA_END)
      ) {
        const startDate = new Date(now.getFullYear(), 8, 26); // September 26
        const endDate = new Date(now.getFullYear() + 1, 2, 23); // March 23 of the next year
        getSemesterPercentage(startDate, endDate);
        setSemester("Alpha");
      } else {
        setSemesterPercentage(0);
      }
    };

    const calculateWeekSpent = () => {
      const dayOfWeek = now.getDay();
      const percentageOfWeekSpent = calculatePercentage(dayOfWeek + 1, 7);
      setPercentageWeek(roundToNearestTenth(percentageOfWeekSpent));
    };

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    };

    calculateWeekSpent();
    calculateYearPercentage();
    calculateSemesterPercentage();
    getRandomQuote();
  }, []);

  const getDisplayedText = () => {
    if (dayOfYear === 325) {
      return (
        <p className="text-center text-[12px] xs:text-[16px] sm:text-[18px] font-bold">
          Merry Christmas!🎉
        </p>
      );
    } else if (dayOfYear === 1) {
      return (
        <p className="text-center text-[12px] xs:text-[16px] sm:text-[18px] font-bold">
          Happy New Year!🎉
        </p>
      );
    } else {
      return (
        <q className="text-center text-[12px] xs:text-[16px] sm:text-[18px] font-bold">
          {randomQuote}
        </q>
      );
    }
  };

  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] z-[1000] overlay-transition flex justify-center items-center absolute overlay w-full h-full"
      onClick={() => setShowPopup(false)}
    >
      <div
        className="modal-container gradient-background w-[160px] h-[400px] xs:w-[200px] ss:w-[250px] p-6 xs:h-[580px] rounded-[15px] shadow-lg overflow-y-scroll scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          {getDisplayedText()}
          <hr className="border-black border-[0.1px] opacity-65 w-[100px] xs:w-[160px] mt-2" />
          <p className="box-shadow bg-[#FECF5A] rounded-[15px]  px-4 xs:px-6 py-2 mt-2 text-[12px] xs:text-[15px] font-bold text-white">
            Semester
          </p>
          <div className="my-2 xs:my-4">
            <CircleProgressBar percentage={semesterPercentage} />
          </div>
          <p className="text-[12px] xs:text-[15px]  text-center font-bold">
            {semesterPercentage}% of {semester} <br /> semester gone
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="box-shadow bg-[#62CDFA] rounded-[15px] px-4 xs:px-6 py-2 mt-2 text-[12px] xs:text-[15px] font-bold text-white">
            Year Spent
          </p>
          <div className="my-2 xs:my-4">
            <CircleProgressBar percentage={percentageYear} />
          </div>
          <p className="text-[12px] xs:text-[15px] text-center font-bold">
            {percentageYear}% of the <br /> year gone
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="box-shadow bg-[#262632] rounded-[15px] px-4 xs:px-6 py-2 mt-2 text-[12px] xs:text-[15px] font-bold text-white">
            Week Spent
          </p>
          <div className="my-2 xs:my-4">
            <CircleProgressBar percentage={percentageWeek} />
          </div>
          <p className="text-[12px] xs:text-[15px]  text-center font-bold">
            {percentageWeek}% of the <br /> week gone
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
