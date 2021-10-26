import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { Timetable } from "../repository/Timetabel";
import Static from "../static";

export type KokasaiTimeLineItemModel = {
  day1: (TimelineItemModel & { url: string })[];
  day2: (TimelineItemModel & { url: string })[];
};
export const makeKokasaiTimeLine = (
  timeTable: Timetable
): KokasaiTimeLineItemModel => ({
  day1: timeTable.day1.map((time) => ({
    url: time.url ? Static.stageLink.src("day1", time.url) : "",
    title: time.time,
    cardTitle: time.title,
    cardDetailedText: time.url ? "生配信はこちら" : null,
    media: {
      type: "IMAGE",
      source: { url: Static.stageImage.src(time.groupName) },
    },
  })),
  day2: timeTable.day2.map((time) => ({
    title: time.time,
    cardTitle: time.title,
    cardDetailedText: time.url ? "生配信はこちら" : null,
    media: {
      type: "IMAGE",
      source: { url: Static.stageImage.src(time.groupName) },
    },
    url: Static.stageLink.src("day2", time.url),
  })),
});
