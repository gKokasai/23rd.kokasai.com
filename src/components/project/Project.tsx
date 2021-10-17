import React from "react";
import { Link } from "react-router-dom";
import WithHeaderHoverCard from "./WithHeaderHoverCard";

const Project: React.FC = () => (
  <div className="w-full h-full">
    <h2 className="text-lg pl-5 pt-5 pc:text-2xl desktop:text-4xl pc:pl-10 pc:pt-10">
      企画一覧
    </h2>
    <div className="flex flex-col pt-16 items-center pc:flex-row pc:justify-around pc:pt-32 desktop:pt-44">
      <div className="pb-10">
        <Link to="/project/map">
          <WithHeaderHoverCard header="地図から探す" />
        </Link>
      </div>
      <div className="">
        <Link to="/project/group">
          <WithHeaderHoverCard header="クラス名・団体名から探す" />
        </Link>
      </div>
    </div>
  </div>
);

export default Project;
