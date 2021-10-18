import React from "react";

const PageTitle: React.FC = ({ children }) => (
  <h2 className="pc:text-2xl desktop:text-4xl pl-10 pt-10">{children}</h2>
);

export default PageTitle;
