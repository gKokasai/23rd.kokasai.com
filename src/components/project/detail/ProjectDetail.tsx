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
    <div className="h-full relative m-auto box-border bg-pinkF19393 bg-clip-content bg-cover p-16">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl pl-10 pt-10">{name}</h2>
          <div className="pl-20 pt-6 flex">
            <div className="pr-2 pb-4">
              <GroupOutlinedIcon />
            </div>
            {groupName}
          </div>
          <div className="pl-20 pt-6 pr-5">{description}</div>
        </div>
        <div className="pt-10 pr-10 ">
          <div className="border-greenC7D1BD border-2">
            <ThumbnailImage
              path={Static.projectThumbnail.path(groupName)}
              alt={Static.projectThumbnail.alt(groupName)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
