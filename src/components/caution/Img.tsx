import React from "react";
import Static from "../../static";

type ImgProps = {
  imgName: string;
};

const Img: React.FC<ImgProps> = ({ imgName }) => (
  <div className="w-full">
    <img
      src={Static.cautionImage.src(imgName)}
      alt={Static.cautionImage.alt(imgName)}
      width="200px"
    />
  </div>
);

export default Img;
