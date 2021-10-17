import React from "react";

const Paragraph: React.FC = ({ children }) => (
  <p className="pc:text-lg desktop:text-xl pl-20 pt-10　pr-10">{children}</p>
);

export default Paragraph;
