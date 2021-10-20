import React, { useState } from "react";
import { Chrono } from "react-chrono";
import PageTitle from "../common/PageTitle";
import { getTimetable, Timetable } from "../../repository/Timetabel";
import { makeKokasaiTimeLine } from "../../utill/makeItems";
import {TimelineItemModel} from "react-chrono/dist/models/TimelineItemModel";
import TabChangeBar from "./TabChangeBar";
import {useHistory} from "react-router-dom";

let ready: null | Timetable = null;

const Timetable: React.FC = () => {
  if (ready !== null) {
    const kokasaiTimeLine = makeKokasaiTimeLine(ready);
    const history = useHistory();
    console.log(history.location.search)
    const [select, setSelect] = useState<"day1" | "day2">( history.location.search.split("=")[1] as "day1" | "day2" || "day1");
    const [showElement, setShowElement] = useState<TimelineItemModel[]>(select ? kokasaiTimeLine[select] : kokasaiTimeLine["day1"]);
    const onClickTabChangeBar = (event: React.MouseEvent<HTMLButtonElement>) => {
      const targetKey: "day1" | "day2" = event.currentTarget.dataset.key as "day1" | "day2";
      setSelect(targetKey);
      setShowElement(kokasaiTimeLine[targetKey]);
      history.replace(`/timetable?day=${targetKey}`)
    }

    return (
      <div className="bg-cream">
        <PageTitle>タイムテーブル</PageTitle>
        <TabChangeBar onClick={onClickTabChangeBar} select={select}/>
          <div className="h-full w-full">
            <Chrono
              hideControls
              items={showElement}
              mode="VERTICAL_ALTERNATING"
              allowDynamicUpdate
            />
          </div>
      </div>
    );
  }

  // eslint-disable-next-line no-async-promise-executor
  throw new Promise(async (resolve) => {
    await getTimetable().then((response) => {
      ready = response.data;
    });
    resolve(null);
  });
};

export default Timetable;
