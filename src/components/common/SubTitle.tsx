import React from "react";

const SubTitle: React.FC = ({ children }) => (
  <div className="pl-1">
    <h3 className="pc:text-xl desktop:text-2xl pl-8 pc:pl-16 pt-5 border-b border-black w-5/6">
      {children}
    </h3>
  </div>
);

export default SubTitle;
