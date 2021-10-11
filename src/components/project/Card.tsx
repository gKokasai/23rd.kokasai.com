import React, { FC } from "react";
import ThumbnailImage from "./ThumbnailImage";

/**
 * 企画一覧のカードコンポーネント
 * @module CardProps
 * @param {img} thumbnailImagePath - サムネイル画像のパス
 * @param {string} name - 企画名
 * @param {string} description - 企画の説明文
 */

export type CardProps = {
  thumbnailImagePath: string;
  name: string;
  description: string;
  gradeAndClass: string;
  place: string;
};

const Card: FC<CardProps> = (props) => {
  const { thumbnailImagePath, name, description, gradeAndClass, place } = props;
  return (
    <div className="container">
      <div className="flex">
        <div>
          <ThumbnailImage
            path={thumbnailImagePath}
            alt={`${name}のサムネイル画像`}
          />
        </div>
        <div className="flex flex-col pl-3">
          <h3 className="font-bold pb-3">{name}</h3>
          <div className="pl-10 pb-4">{description}</div>
          <div className="pl-10 pb-4">{gradeAndClass}</div>
          <div className="pl-10 pb-4">{place}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
