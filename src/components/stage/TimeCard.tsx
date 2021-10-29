import React, { FC } from "react";
import Static from "../../static";

type Props = {
  title: string;
  groupName: string;
  time: string;
  live: boolean;
};

const TimeCard: FC<Props> = ({ title, groupName, time, live }) => (
  <div className="pc:flex pc:justify-between">
    <div className="w-full p-2 pc:p-4">
      <div className="flex justify-between">
        <p className="text-xl pc:text-2xl">{title}</p>
        {live && (
          <div className="flex items-center hidden pc:block my-auto">
            <img width="30px" src={Static.youtube.icon} alt="Youtube配信あり" />
          </div>
        )}
      </div>
      <div className="flex text-left px-2 pc:px-4 pt-2">
        <div className="pc:flex w-full">
          <p className="text-lg pc:w-1/2">{groupName}</p>
          <p className="text-lg pc:w-1/2">{time}</p>
        </div>
        {live && (
          <div className="w-8 block pc:hidden m-auto">
            <div className="flex items-center">
              <img
                width="30px"
                src={Static.youtube.icon}
                alt="Youtube配信あり"
              />
            </div>
          </div>
        )}
      </div>
    </div>
    <img
      src={Static.stageImage.src(groupName)}
      alt={Static.stageImage.alt(groupName)}
      className="w-40 h-40 p-2 m-auto pc:m-0"
    />
  </div>
);

export default TimeCard;
