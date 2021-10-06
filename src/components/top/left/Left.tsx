import React from "react";
import Pages from "../../Pages";

const Left: React.FC = () => (
  <div className="h-full container">
    <div className="bg-midBlue flex h-full flex-col items-end justify-end pr-4 text-white">
      <ul>
        {Object.keys(Pages).map((key) => (
          <a href="/">
            <li className="pb-4" key={key}>
              {Pages[key].displayName}
            </li>
          </a>
        ))}
      </ul>
    </div>
  </div>
);

export default Left;
