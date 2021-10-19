import React, { FC } from "react";
import ThumbnailImage from "./ThumbnailImage";
import Static from "../../../../static";

/**
 * 企画一覧のカードコンポーネント
 * @module CardProps
 * @param {img} thumbnailImagePath - サムネイル画像のパス
 * @param {string} name - 企画名
 * @param {string} description - 企画の説明文
 */

export type CardProps = {
  name: string;
  groupName: string;
};

const Card: FC<CardProps> = (props) => {
  const { name, groupName } = props;
  return (
    <div className="h-full w-full bg-greenC7D1BD rounded-2xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-110">
      <div className="container h-full">
        <div className="flex flex-col items-center justify-around">
          <h3 className="desktop:text-2xl pt-4">{name}</h3>
          <div className="p-4">
            <ThumbnailImage
              path={Static.projectThumbnail.path(groupName)}
              alt={Static.projectThumbnail.alt(groupName)}
            />
          </div>
          <div className="pt-4 pb-4">{groupName}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
