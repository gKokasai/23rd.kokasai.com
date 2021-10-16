import React from "react";
import PageTitle from "../common/PageTitle";
import SubTitle from "../common/SubTitle";
import Paragraph from "../common/Paragraph";

const Access: React.FC = () => (
  <div>
    <PageTitle>アクセス</PageTitle>
    <SubTitle>周辺地図</SubTitle>
    <Paragraph>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.458921419906!2d139.02010350336255!3d36.37627653385497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601e8cc32e0daf8d%3A0x207d7e6356e87ed8!2z576k6aas5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1634367380548!5m2!1sja!2sjp"
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
