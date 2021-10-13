import React from "react";

export type BlockProps = {
  header: string;
};

const Block: React.FC<BlockProps> = (props) => {
  const { header } = props;
  return (
    <div className="pc:w-60 pc:h-60 desktop:w-96 desktop:h-96 bg-greenC7D1BD rounded-2xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-110">
      <h3 className="pc:pt-8 text-center desktop:pt-12 desktop:pl-6 pc:text-lg desktop:text-2xl">
        {header}
      </h3>
    </div>
  );
};

export default Block;
