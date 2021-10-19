import React from "react";
import LogoIllust from "./LogoIllust";
import DateAndTime from "./DateAndTime";
import Description from "./Description";

const Top: React.FC = () => (
  <div className="h-full w-full bg-gradient-to-b from-blue-400 to-blue-100">
    <div className="h-full justify-around flex flex-col items-center pl-2">
      <LogoIllust />
      <DateAndTime />
      <Description />
    </div>
  </div>
  );

export default Top;
