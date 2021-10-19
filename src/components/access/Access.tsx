import React from "react";
import PageTitle from "../common/PageTitle";
import SubTitle from "../common/SubTitle";
import Paragraph from "../common/Paragraph";
import Static from "../../static";

const Access: React.FC = () => (
  <div className="pb-4 bg-cream">
    <PageTitle>アクセス</PageTitle>
    <SubTitle>周辺地図</SubTitle>
    <Paragraph>
      <div className="pt-96 pb-36 pr-4 h-0 relative">
        <iframe
          title="google map"
          src={Static.googleMap.src}
          className="absolute w-full h-full left-0 right-0 bottom-0 top-0"
          width="600"
          height="450"
          loading="lazy"
        />
      </div>
    </Paragraph>
    <SubTitle>JR新前橋駅より</SubTitle>
    <Paragraph>
      <li>徒歩約30分</li>
      <li>タクシー約10分</li>
    </Paragraph>

    <SubTitle>JR井野駅より</SubTitle>
    <Paragraph>
      <li>バス約20分
        <div className="pl-6 pt-2">
          <p>井野駅北バス停</p>
          <p className="pl-10">↓</p>
          <p>市内循環バス「ぐるりん」大八木線・中尾先回りで約20分 (系統番号6)</p>
          <p className="pl-10">↓</p>
          <p>群馬高専前下車</p>
        </div>
      </li>
    </Paragraph>

    <SubTitle>JR高崎駅より</SubTitle>
    <Paragraph>
      <li>バス約44分
        <div className="pl-6 pt-2">
          <p>高崎駅西口バス停9番のりば</p>
          <p className="pl-10">↓</p>
          <p>市内循環バス「ぐるりん」大八木線・中尾先回り（系統番号6)</p>
          <p className="pl-10">↓</p>
          <p>群馬高専前下車</p>
        </div>
      </li>
      <li className="pt-2">タクシー約30分</li>
    </Paragraph>

    <SubTitle>関越自動車道 前橋インターチェンジより（約1km）</SubTitle>
    <Paragraph>車で約5分</Paragraph>
  </div>
);

export default Access;
