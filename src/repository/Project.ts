import axios, { AxiosResponse } from "axios";

export type Project = {
  name: string;
  description: string;
  place: string;
  groupName: string;
};

export type ProjectList = {
  [className: string]: Project;
};

export const getProjectList = (): Promise<AxiosResponse<ProjectList>> =>
  axios.get("/json/project-list.json");
