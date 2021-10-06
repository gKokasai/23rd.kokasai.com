import React from "react";
import LogoIllust from "./LogoIllust";
import DateAndTime from "./DateAndTime";
import Description from "./Description";
import Icon from "./Icon";
import Static from "../../../static";

const Right: React.FC = () => (
  <div className="container h-full w-full">
    <div className="bg-cream h-full flex-row items-center w-full">
      <LogoIllust />
      <DateAndTime />
      <Description />
      <div className="container">
        <div className="flex justify-end">
          <Icon
            src={Static.instagramIcon}
            alt="Instagramのアイコン"
            href="https://Instagram.com"
          />
          <Icon
            src={Static.twitterIcon}
            alt="Twitterのアイコン"
            href="https://twitter.com"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Right;
