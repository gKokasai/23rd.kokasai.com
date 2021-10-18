import React from "react";
import PageTitle from "../common/PageTitle";
import SubTitle from "../common/SubTitle";
import Paragraph from "../common/Paragraph";
import Static from "../../static";

const Access: React.FC = () => (
  <div>
    <PageTitle>アクセス</PageTitle>
    <SubTitle>周辺地図</SubTitle>
    <Paragraph>
      <iframe
        title="google map"
        src={Static.googleMap.src}
        width="600"
        height="450"
        loading="lazy"
      />
    </Paragraph>
    <SubTitle>JR新前橋駅より</SubTitle>
    <Paragraph>徒歩約30分またはタクシー約10分</Paragraph>

    <SubTitle>JR井野駅より</SubTitle>
    <Paragraph>
      井野駅北バス停より、市内循環バス「ぐるりん」大八木線・中尾先回り（系統番号6）で群馬高専前下車（約20分）
    </Paragraph>

    <SubTitle>JR高崎駅より（約8km）</SubTitle>
    <Paragraph>
      高崎駅西口バス停9番のりばより、市内循環バス「ぐるりん」大八木線・中尾先回り（系統番号6）で群馬高専前下車（約44分）
      タクシー約30分
    </Paragraph>

    <SubTitle>関越自動車道 前橋インターチェンジより（約1km）</SubTitle>
    <Paragraph>車で約5分</Paragraph>
  </div>
);

export default Access;
