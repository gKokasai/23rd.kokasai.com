import React from "react";
import { useLocation } from "react-router-dom";
import PageTitle from "./common/PageTitle";
import Paragraph from "./common/Paragraph";
import { KokasaiTimeLineItemModel } from "../utill/makeItems";
import SubTitle from "./common/SubTitle";

const LiveStream: React.FC = () => {
  const location = useLocation();
  const kokasaiTimeline: KokasaiTimeLineItemModel =
    location.state as KokasaiTimeLineItemModel;
  return (
    <div className="pb-6">
      <PageTitle>生配信</PageTitle>
      <Paragraph>
        ステージ企画はYoutubeにて生配信を行っております。
        <br />
        講演名をクリックすることでサイトに飛びます。
      </Paragraph>
      <SubTitle>1日目</SubTitle>
      <Paragraph>
        {kokasaiTimeline.day1.map((item) =>
          item.url ? (
            <div className="pt-2 flex flex-col pc:flex-row">
              <div className="pr-2">{item.title}</div>
              <p className="hover:text-blue-600 hover:border-b pl-2 pc:pl-0 inline-block">
                <div>
                  <a href={item.url}>{item.cardTitle}</a>
                </div>
              </p>
            </div>
          ) : null
        )}
      </Paragraph>
      <SubTitle>2日目</SubTitle>
      <Paragraph>
        {kokasaiTimeline.day2.map((item) =>
          item.url ? (
            <div className="pt-2 flex flex-col pc:flex-row">
              <div className="pr-2">{item.title}</div>
              <p className="hover:text-blue-600 hover:border-b pl-2 pc:pl-0 inline-block">
                <div>
                  <a href={item.url}>{item.cardTitle}</a>
                </div>
              </p>
            </div>
          ) : null
        )}
      </Paragraph>
    </div>
  );
};

export default LiveStream;
