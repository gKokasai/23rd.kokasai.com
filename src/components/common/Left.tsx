import React from "react";
import { Link } from "react-router-dom";
import { ToShowPages } from "../Pages";

const Left: React.FC = () => (
  <div className="h-full container">
    <div className="flex h-full flex-col items-end justify-end pr-6 text-white bg-orangeF2954B">
      <ul>
        {ToShowPages.map((page) => (
          <Link to={page.path} key={page.displayName}>
            <li className="pb-8 text-lg">{page.displayName}</li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);

export default Left;
