import React from "react";
import { Link } from "react-router-dom";
import WithHeaderHoverCard from "./WithHeaderHoverCard";

const Project: React.FC = () => (
  <div className="container h-full w-full">
    <h2 className="pc:text-2xl desktop:text-4xl pl-10 pt-10">企画一覧</h2>
    <div className="flex flex-row justify-around pc:pt-32 desktop:pt-44">
      <Link to="/project/map">
        <WithHeaderHoverCard header="地図から探す" />
      </Link>
      <Link to="/project/group">
        <WithHeaderHoverCard header="クラス名・団体名から探す" />
      </Link>
    </div>
  </div>
);

export default Project;
