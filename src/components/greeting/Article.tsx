import React from "react";
import SubTitle from "../common/SubTitle";
import Static from "../../static";

export type ArticleProps = {
  title: string;
  imgName: string;
  imgDirection: "right" | "left";
};
const Article: React.FC<ArticleProps> = (props) => {
  const { title, children, imgName, imgDirection } = props;
  const defaultImgClassName = "hidden w-1/3"
  const leftImgClassName = `${defaultImgClassName} ${imgDirection === "left" ? "pc:inline-block" : "pc:hidden"}`;
  const rightImgClassName = `${defaultImgClassName} ${imgDirection === "right" ? "pc:inline-block" : "pc:hidden"}`;
  return (
    <div className="pb-2">
      <SubTitle>{title}</SubTitle>
      <div className="flex flex-col pc:flex-row pt-6 px-4">
        <img
          className={leftImgClassName}
          src={Static.greetingImage.src(imgName)}
          alt={Static.greetingImage.alt(imgName)}
          width="auto"
        />
          <p className="text-lg px-6">{children}</p>
        <img
          className={rightImgClassName}
          src={Static.greetingImage.src(imgName)}
          alt={Static.greetingImage.alt(imgName)}
          width="auto"
        />
        <img
          className="inline-block pc:hidden p-2"
          src={Static.greetingImage.src(imgName)}
          alt={Static.greetingImage.alt(imgName)}
          width="auto"
        />
      </div>
    </div>
  );
};

export default Article;
