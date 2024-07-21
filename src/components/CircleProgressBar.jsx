import React from "react";

const CircleProgressBar = ({ percentage }) => {
  return (
    <div className="filter w-16 h-16 xs:w-28 xs:h-28 ts:w-32 flex items-center justify-center rounded-full">
      <div className="relative w-16 h-16 xs:w-28 xs:h-28 ts:w-32 ts:h-32 cursor-pointer flex justify-center items-center rounded-full">
        <svg
          className="rotate-[270deg] rounded-full absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <circle
            className="stroke-current text-gray-300"
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            fill="#fff"
          />
          <circle
            className="stroke-current text-[#66bce0] transition-all duration-500 ease-out"
            cx="50"
            cy="50"
            r={40}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 40} ${2 * Math.PI * 40}`}
            strokeDashoffset={
              2 * Math.PI * 40 - (percentage / 100) * 2 * Math.PI * 40
            }
          />
          {percentage && percentage !== 0 && (
            <circle
              className="fill-current text-yellow-400 drop-shadow-[0_0_4px_rgba(254,207,90,0.7)]"
              cx={`${50 + 40 * Math.cos((percentage / 100) * 2 * Math.PI)}`}
              cy={`${50 + 40 * Math.sin((percentage / 100) * 2 * Math.PI)}`}
              r="5"
            />
          )}
        </svg>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <div className="flex-col flex items-center justify-center">
            <p className="font-bold text-[16px] ts:text-[24px] text-black">
              {percentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleProgressBar;
