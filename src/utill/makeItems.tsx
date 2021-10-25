import React from "react";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { Timetable } from "../repository/Timetabel";
import Static from "../static";

export type KokasaiTimeLineItemModel = {
  day1: {
    items: TimelineItemModel[];
    icons: JSX.Element;
  };
  day2: {
    items: TimelineItemModel[];
    icons: JSX.Element;
  };
};
export const makeKokasaiTimeLine = (
  timeTable: Timetable
): KokasaiTimeLineItemModel => ({
  day1: {
    items: timeTable.day1.map((time) => ({
      title: time.time,
      cardTitle: time.title,
      media: {
        type: "IMAGE",
        source: { url: Static.stageImage.src(time.groupName) },
      },
    })),
    icons: (
      <div className="chrono-icons">
        {timeTable.day1.map((time, index) =>
          time.url ? (
            <a href={Static.stageLink.src("day1", time.url)}>
              <img src={Static.youtube.icon} alt={`${index + 1}`} />
            </a>
          ) : null
        )}
      </div>
    ),
  },
  day2: {
    items: timeTable.day2.map((time) => ({
      title: time.time,
      cardTitle: time.title,
      media: {
        type: "IMAGE",
        source: { url: Static.stageImage.src(time.groupName) },
      },
    })),
    icons: (
      <div className="chrono-icons">
        {timeTable.day2.map((time, index) =>
          time.url !== "" ? (
            <a href={Static.stageLink.src("day2", time.url)}>
              <img
                width="auto"
                src={Static.youtube.icon}
                alt={`${index + 1}`}
              />
            </a>
          ) : null
        )}
      </div>
    ),
  },
});
