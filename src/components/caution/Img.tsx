import React from "react";
import Static from "../../static";

type ImgProps = {
  imgName: string;
};

const Img: React.FC<ImgProps> = ({ imgName }) => (
  <div className="w-20 pc:w-40">
    <img
      src={Static.cautionImage.src(imgName)}
      alt={Static.cautionImage.alt(imgName)}
      width="auto"
    />
  </div>
);

export default Img;
