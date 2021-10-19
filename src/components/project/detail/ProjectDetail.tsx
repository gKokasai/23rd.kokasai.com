import React, { useEffect } from "react";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { useLocation } from "react-router-dom";
import ThumbnailImage from "../ThumbnailImage";
import Static from "../../../static";

const ProjectDetail: React.FC = () => {
  const location = useLocation();
  const project = location.state[0];
  const { name, groupName, description } = project;

  useEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
  }, []);
  return (
    <div className="h-full w-full relative bg-clip-content bg-cover p-10">
      <div className="bg-blue-200">
        <div className="p-4 w-1/3 pc:hidden">
          <ThumbnailImage
            path={Static.projectThumbnail.path(groupName)}
            alt={Static.projectThumbnail.alt(groupName)}
          />
        </div>
        <div className="flex justify-between">
          <div>
            <div className="pc:text-2xl p-2 px-4 pc:p-4">{name}</div>
            <div className="pc:text-lg flex p-4">
              <GroupOutlinedIcon />
              <div className="pl-2">{groupName}</div>
            </div>
          </div>
          <div>
            <div className="p-4 w-1/3 hidden pc:inline-block">
              <ThumbnailImage
                path={Static.projectThumbnail.path(groupName)}
                alt={Static.projectThumbnail.alt(groupName)}
              />
            </div>
          </div>
        </div>
        <div className="p-4">{description}</div>
      </div>
    </div>
  );
};

export default ProjectDetail;
