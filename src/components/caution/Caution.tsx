import React, { useState } from "react";
import PageTitle from "../common/PageTitle";
import Img from "./Img";
import {
  CautionSentenceList,
  getCautionSentence,
} from "../../repository/Caution";

let ready: CautionSentenceList | null = null;

const Caution: React.FC = () => {
  const [cautionSentenceList, setCautionSentenceList] =
    useState<CautionSentenceList>(ready);
  const imgNames = [
    "hand",
    "mask",
    "restaurant",
    "conversation",
    "band",
    "qr",
    "map",
    "garbage",
    "smoking-drinking",
    "car",
    "theft",
    "lost",
    "photo",
    "help",
  ];
  if (ready !== null) {
    return (
      <div className="w-full bg-cream">
        <PageTitle>諸注意</PageTitle>
        <div className="h-full flex flex-wrap w-full pt-5">
          {imgNames.map((imgName) => (
            <div className="flex flex-col justify-around w-1/2 p-3 pc:py-2 pc:px-10">
              <div className="w-full h-full text-center bg-pink-300 rounded-2xl shadow-2xl">
                <div className="p-2 inline-block">
                  <Img imgName={imgName} />
                </div>
                <div className="p-2">{cautionSentenceList[imgName]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // eslint-disable-next-line no-async-promise-executor
  throw new Promise(async (resolve) => {
    await getCautionSentence().then((response) => {
      ready = response.data;
      setCautionSentenceList(response.data);
    });
    resolve(null);
  });
};

export default Caution;
