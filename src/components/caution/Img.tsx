import React from "react";
import Static from "../../static";

type ImgProps = {
  imgName: string;
};

const Img: React.FC<ImgProps> = ({ imgName }) => (
  <div className="w-full">
    <img
      className="w-20 pc:w-auto"
      src={Static.cautionImage.src(imgName)}
      alt={Static.cautionImage.alt(imgName)}
      width="150px"
    />
  </div>
);

export default Img;
