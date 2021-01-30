import React, { FC } from "react";
import { Link } from "react-router-dom";


const Header: FC = (): JSX.Element => {
  return (
    <header>
        <div>工華祭</div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/project">Project</Link>
    </header>
  );
};

export default Header;
