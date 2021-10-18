import React, { useEffect } from "react";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { useLocation } from "react-router-dom";
import ThumbnailImage from "../group/list/ThumbnailImage";
import Static from "../../../static";

const ProjectDetail: React.FC = () => {
  const location = useLocation();
  const project = location.state[0];
  const { name, groupName, description } = project;

  useEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
  }, []);
  return (
    <div className="h-full w-full relative m-auto box-border bg-pinkF19393 bg-clip-content bg-cover p-6 pc:p-16">
      <div className="w-full flex justify-between">
        <div>
          <div className="flex w-full">
            <div className="w-1/2 pt-10 pl-6 pc:pt-10 pc:pr-10 pc:hidden">
              <ThumbnailImage
                path={Static.projectThumbnail.path(groupName)}
                alt={Static.projectThumbnail.alt(groupName)}
              />
            </div>
            <h2 className="w-full text-lg pl-10 pt-10">{name}</h2>
          </div>
          <div className="pl-36 pc:pl-20 pc:pt-6 flex">
            <div className="pr-2 pb-4">
              <GroupOutlinedIcon />
            </div>
            {groupName}
          </div>
          <div className="pt-10 px-5">{description}</div>
        </div>
        <div className="hidden pc:pt-10 pc:pr-10 pc:inline-block">
          <ThumbnailImage
            path={Static.projectThumbnail.path(groupName)}
            alt={Static.projectThumbnail.alt(groupName)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
