import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { Timetable } from "../repository/Timetabel";
import Static from "../static";

export type KokasaiTimeLineItemModel = {
  day1: TimelineItemModel[];
  day2: TimelineItemModel[];
};
export const makeKokasaiTimeLine = (
  timeTable: Timetable
): KokasaiTimeLineItemModel => ({
  day1: timeTable.day1.map((time) => ({
    title: time.time,
    cardTitle: time.title,
    media: {
      type: "IMAGE",
      source: { url: Static.stageImage.src(time.groupName) },
    },
  })),
  day2: timeTable.day2.map((time) => ({
    title: time.time,
    cardTitle: time.title,
    media: {
      type: "IMAGE",
      source: { url: Static.stageImage.src(time.groupName) },
    },
  })),
});
