import React from "react";

/**
 * サムネイル画像
 * @module ThumbnailImageProps
 * @param {string} path - 画像のパス
 * @param {string} alt - 画像の説明
 */

export type ThumbnailImageProps = {
  path: string;
  alt: string;
};

const ThumbnailImage: React.FC<ThumbnailImageProps> = (props) => {
  const { path, alt } = props;
  return (
    <div className="h-40 w-40">
      <img src={path} alt={alt} />
    </div>
  );
};

export default ThumbnailImage;
