import React from "react";
import LogoIllust from "./LogoIllust";
import DateAndTime from "./DateAndTime";
import Description from "./Description";
import Icon from "./Icon";
import Static from "../../../static";

const Right: React.FC = () => (
  <div className="container h-full w-full">
    <div className="bg-cream h-full flex flex-col justify-between items-center w-full">
      <div className="pt-3 pb-3">
        <LogoIllust />
      </div>
      <DateAndTime />
      <Description />
      <div className="container">
        <div className="flex justify-end">
          <Icon
            src={Static.instagram.icon}
            alt="Instagramのアイコン"
            href={Static.instagram.url}
          />
          <Icon
            src={Static.twitter.icon}
            alt="Twitterのアイコン"
            href={Static.twitter.url}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Right;
