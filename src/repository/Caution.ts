import axios, { AxiosResponse } from "axios";

export type CautionSentenceList = {
  [sentenceName: string]: string;
};

export const getCautionSentence = (): Promise<
  AxiosResponse<CautionSentenceList>
> => axios.get<CautionSentenceList>("/json/caution-sentence.json");
