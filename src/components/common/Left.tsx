import React from "react";
import Pages from "../Pages";

const Left: React.FC = () => (
  <div className="h-full container">
    <div className="bg-midBlue flex h-full flex-col items-end justify-end pr-6 text-white">
      <ul>
        {Object.keys(Pages).map((key) => (
          <a href="/" key={key}>
            <li className="pb-8 text-lg">{Pages[key].displayName}</li>
          </a>
        ))}
      </ul>
    </div>
  </div>
);

export default Left;
