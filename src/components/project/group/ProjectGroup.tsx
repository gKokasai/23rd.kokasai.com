import React, { useState } from "react";
import FilterLabel from "./list/FilterLabel";
import ProjectList from "./list/ProjectList";
import {
  getProjectList,
  ProjectList as TypeProjectList,
} from "../../../repository/Project";

let ready: null | TypeProjectList = null;

const ProjectGroup: React.FC = () => {
  const groups = [
    "1年生",
    "2年生",
    "3年生",
    "4, 5年生",
    "部活",
    "愛好会",
    "有志",
  ];
  const [projectList, setProjectList] = useState<TypeProjectList | null>(ready);
  const [selectedGroup, setSelectedGroup] = useState<string[]>(groups);

  const onClickFilterLabelItems = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const targetElement = event.currentTarget;
    const targetKey = targetElement.dataset.key;
    setSelectedGroup([targetKey]);
  };

  if (ready !== null) {
    return (
      <div>
        <h2 className="pc:text-2xl desktop:text-4xl pl-10 pt-10">企画一覧</h2>
        <div className="pt-6 w-full">
          <FilterLabel
            labelItems={groups}
            selects={selectedGroup}
            onClick={(event) => onClickFilterLabelItems(event)}
          />
        </div>
        <div className="pc:pr-9">
          <ProjectList
            projectList={projectList}
            selectedGroup={selectedGroup}
          />
        </div>
      </div>
    );
  }

  // eslint-disable-next-line no-async-promise-executor
  throw new Promise(async (resolve) => {
    await getProjectList().then((response) => {
      ready = response.data;
      setProjectList(response.data);
    });
    resolve(null);
  });
};

export default ProjectGroup;
