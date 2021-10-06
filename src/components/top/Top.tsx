import React from "react";
import Left from "./left/Left";
import Right from "./right/Right";

const Top: React.FC = () => (
  <div className="container flex justify-between h-full w-full">
    <div className="flex h-full w-full">
      <div className="flex flex-col justify-between h-full w-1/4">
        <Left />
      </div>
      <div className="flex flex-col justify-between h-full w-3/4">
        <Right />
      </div>
    </div>
  </div>
);

export default Top;
