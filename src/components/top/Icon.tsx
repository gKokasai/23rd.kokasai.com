import React from "react";

type Props = {
  src: string;
  alt: string;
  href: string;
};

const Icon: React.FC<Props> = (props: Props) => {
  const { src, alt, href } = props;
  return (
    <div className="h-10 w-10 m-5 mr-0">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={src} alt={alt} className="h-full" />
      </a>
    </div>
  );
};
export default Icon;
