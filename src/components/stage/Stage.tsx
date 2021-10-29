import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../common/PageTitle";
import { getTimetable, Time, Timetable } from "../../repository/Timetabel";
import TabChangeBar from "./TabChangeBar";
import Paragraph from "../common/Paragraph";
import SubTitle from "../common/SubTitle";
import { Pages } from "../Pages";
import { Day } from "./Day";
import Static from "../../static";
import TimeCard from "./TimeCard";

let timetable: null | Timetable = null;

const Stage: React.FC = () => {
  if (timetable !== null) {
    const history = useHistory();
    const [day, setDay] = useState<Day>(
      (history.location.search.split("=")[1] as Day) || "day1"
    );
    const [times, setTimes] = useState<Time[]>(timetable.day1);
    const onClickTabChangeBar = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      const targetKey: Day = event.currentTarget.dataset.key as Day;
      setDay(targetKey);
      setTimes(timetable[targetKey]);
      history.replace(`${Pages.stage.path}?day=${targetKey}`);
    };

    return (
      <div className="bg-cream pb-4">
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
          <TabChangeBar onClick={onClickTabChangeBar} select={day} />
          {times.map(({ time, title, groupName, url }) => (
            <div className="bg-white my-2" key={time}>
              {url ? (
                <a
                  href={Static.stageLink.src(day, url)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TimeCard
                    title={title}
                    groupName={groupName}
                    time={time}
                    live
                  />
                </a>
              ) : (
                <TimeCard
                  title={title}
                  groupName={groupName}
                  time={time}
                  live={false}
                />
              )}
            </div>
          ))}
        </Paragraph>
      </div>
    );
  }

  // eslint-disable-next-line no-async-promise-executor
  throw new Promise(async (resolve) => {
    await getTimetable().then((response) => {
      timetable = response.data;
    });
    resolve(null);
  });
};

export default Stage;
