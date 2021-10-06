import React from "react";
import Left from "./left/Left";
import Right from "./right/Right";

const Top: React.FC = () => (
  <div className="container h-full w-full">
    <div className="flex flex-wrap h-full w-full">
      <div className="pc:h-full pc:w-1/4 hidden pc:inline-block">
        <Left />
      </div>
      <div className="pc:h-full pc:w-3/4 smartphone:w-full">
        <Right />
      </div>
    </div>
  </div>
);

export default Top;
