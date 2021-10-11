import React from "react";
import LogoIllust from "./LogoIllust";
import DateAndTime from "./DateAndTime";
import Description from "./Description";
import Icon from "./Icon";
import Static from "../../static";

const Top: React.FC = () => (
  <div className="container h-full w-full">
    <div className="bg-cream h-full flex flex-col justify-between items-center w-full">
      <div className="pt-10 pc:pt-3">
        <LogoIllust />
      </div>
      <DateAndTime />
      <div className="pr-2 pl-2">
        <Description />
      </div>
      <div className="container">
        <div className="flex justify-end pr-2 pb-10">
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

export default Top;
