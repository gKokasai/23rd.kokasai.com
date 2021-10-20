import React, { useState } from "react";
import { Chrono } from "react-chrono";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { useHistory } from "react-router-dom";
import PageTitle from "../common/PageTitle";
import { getTimetable, Timetable } from "../../repository/Timetabel";
import { makeKokasaiTimeLine } from "../../utill/makeItems";
import TabChangeBar from "./TabChangeBar";
import Paragraph from "../common/Paragraph";
import SubTitle from "../common/SubTitle";
import { Pages } from "../Pages";

let ready: null | Timetable = null;

const Stage: React.FC = () => {
  if (ready !== null) {
    const kokasaiTimeLine = makeKokasaiTimeLine(ready);
    const history = useHistory();
    console.log(history.location.search);
    const [select, setSelect] = useState<"day1" | "day2">(
      (history.location.search.split("=")[1] as "day1" | "day2") || "day1"
    );
    const [showElement, setShowElement] = useState<TimelineItemModel[]>(
      select ? kokasaiTimeLine[select] : kokasaiTimeLine.day1
    );
    const onClickTabChangeBar = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      const targetKey: "day1" | "day2" = event.currentTarget.dataset.key as
        | "day1"
        | "day2";
      setSelect(targetKey);
      setShowElement(kokasaiTimeLine[targetKey]);
      history.replace(`${Pages.stage.path}?day=${targetKey}`);
    };

    return (
      <div className="bg-cream">
        <PageTitle>ステージ企画</PageTitle>
        <SubTitle>入場についての注意</SubTitle>
        <Paragraph>
          コロナ感染症対策のため、人数制限を行っております。
          <br />
          原則学生は事前申込制、来場者は当日の整理券制です。
          <br />
          当日の整理券は受付にて申込用紙を配布しますので申込用紙記入後、体育館の受付にて申込用紙を整理券と交換いたします。
          定員に達し次第入場ができなくなります。予めご了承ください。
        </Paragraph>
        <SubTitle>タイムテーブル</SubTitle>
        <Paragraph>
          <TabChangeBar onClick={onClickTabChangeBar} select={select} />
          <div className="h-full w-full">
            <Chrono
              hideControls
              items={showElement}
              mode="VERTICAL_ALTERNATING"
              allowDynamicUpdate
            />
          </div>
        </Paragraph>
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

export default Stage;
