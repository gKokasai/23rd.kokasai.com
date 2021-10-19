import React from "react";
import { Link } from "react-router-dom";
import WithHeaderHoverCard from "./WithHeaderHoverCard";
import PageTitle from "../common/PageTitle";

const Project: React.FC = () => (
  <div className="w-full h-full container">
    <PageTitle>企画一覧</PageTitle>
    <div className="h-3/4 flex flex-col items-center justify-around m-auto">
      <div>
        <Link to="/project/group">
          <WithHeaderHoverCard header="クラス名・団体名から探す" />
        </Link>
      </div>
    </div>
  </div>
);

export default Project;
