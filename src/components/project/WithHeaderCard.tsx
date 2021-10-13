import React from "react";

export type BlockProps = {
  header: string;
};

const WithHeaderCard: React.FC<BlockProps> = (props) => {
  const { header, children } = props;
  return (
    <div className="pc:w-60 pc:h-60 desktop:w-96 desktop:h-96 bg-greenC7D1BD rounded-2xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-110">
      <h3 className="pc:pt-4 text-center desktop:pt-12 desktop:pl-6 desktop:text-2xl">
        {header}
      </h3>
      {children}
    </div>
  );
};

export default WithHeaderCard;
