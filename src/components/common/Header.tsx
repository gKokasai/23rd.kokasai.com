import React from "react";
import Static from "../../static";

const Header: React.FC = () => (
  <div>
    <header className="bg-blue-300">
      <h1>工華祭</h1>
      <a href="https://twitter.com/NITGC_Kokasai">
        <img
          className="container h-6 w-6 flex"
          src={Static.twitterIcon}
          alt="Twitterのsvgアイコン"
        />
      </a>
      <a href="https://Instagram.com/nitgc_kokasai">
        <img
          className="container h-7 w-7 flex"
          src={Static.instagramIcon}
          alt="Instagramのsvgアイコン"
        />
      </a>
    </header>
  </div>
);

export default Header;
