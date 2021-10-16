import React from "react";

export type BlockProps = {
  header: string;
};

const WithHeaderHoverCard: React.FC<BlockProps> = (props) => {
  const { header } = props;
  return (
    <div className="pc:w-60 pc:h-60 desktop:w-96 desktop:h-96 bg-greenC7D1BD rounded-2xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-110 flex justify-center items-center">
      <div className="text-2xl">{header}</div>
    </div>
  );
};

export default WithHeaderHoverCard;
