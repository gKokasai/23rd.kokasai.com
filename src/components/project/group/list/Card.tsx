import React, { FC } from "react";
import ThumbnailImage from "./ThumbnailImage";
import WithHeaderCard from "../../WithHeaderCard";

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
  groupName: string;
};

const Card: FC<CardProps> = (props) => {
  const { thumbnailImagePath, name, groupName } = props;
  return (
    <WithHeaderCard header={name}>
      <div className="container">
        <div className="flex flex-row justify-center">
          <ThumbnailImage
            path={thumbnailImagePath}
            alt={`${name}のサムネイル画像`}
          />
        </div>
        <div className="text-center">
          <div className="pb-4">{groupName}</div>
        </div>
      </div>
    </WithHeaderCard>
  );
};

export default Card;
