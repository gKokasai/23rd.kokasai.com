import React, { useState } from "react";
import FilterLabel from "./FilterLabel";
import ProjectList from "./ProjectList";
import {
  getProjectList,
  ProjectList as TypeProjectList,
} from "../../repository/Project";
import {useHistory} from "react-router-dom";
import {Pages} from "../Pages";

let ready: null | TypeProjectList = null;

const Project: React.FC = () => {
  const history = useHistory();
  const param = history.location.search.split("=")[1];
  const select = decodeURI(param);
  const groups = [
    "1年生",
    "2年生",
    "3年生",
    "4,5年生",
    "部活",
    "愛好会・研究会",
    "有志",
  ];
  const [projectList, setProjectList] = useState<TypeProjectList | null>(ready);
  const [selectedGroup, setSelectedGroup] = useState<string[]>(
    select ? [select] : ["1年生"]
  );
  const onClickFilterLabelItems = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const targetElement = event.currentTarget;
    const targetKey = targetElement.dataset.key;
    setSelectedGroup([targetKey]);
    const encodedTargetKey = encodeURI(targetKey);
    history.replace(
      `${Pages.project.path}?select=${encodedTargetKey}`
    );
  };

  if (ready !== null) {
    return (
      <div className="bg-cream">
        <h2 className="pc:text-2xl desktop:text-4xl pl-10 pt-10">企画一覧</h2>
        <div className="pt-6 w-full">
          <FilterLabel
            labelItems={groups}
            selects={selectedGroup}
            onClick={(event) => onClickFilterLabelItems(event)}
          />
        </div>
        <div className="pr-10 pc:pr-9 bg-cream">
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

export default Project;
