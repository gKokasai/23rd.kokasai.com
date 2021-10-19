import React from "react";

const Paragraph: React.FC = ({ children }) => (
  <p className="pc:text-lg desktop:text-xl px-4 pt-3 pc:pl-20 pc:pt-5 pc:pr-8">
    {children}
  </p>
);

export default Paragraph;
