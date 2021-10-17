import axios, { AxiosResponse } from "axios";

export type Project = {
  name: string;
  description: string;
  place: string;
  groupName: string;
  type: string;
};

export type ProjectList = Project[];

export const getProjectList = (): Promise<AxiosResponse<ProjectList>> =>
  axios.get("/json/project-list.json");
