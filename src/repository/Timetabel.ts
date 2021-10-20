import axios, { AxiosResponse } from "axios";

export type Time = {
  time: string;
  title: string;
  groupName: string;
};

export type Timetable = {
  day1: Time[];
  day2: Time[];
};

export const getTimetable = (): Promise<AxiosResponse<Timetable>> =>
  axios.get("/json/time-table.json");
