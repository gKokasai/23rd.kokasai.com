import React from "react";
import Static from "../../static";

const Header: React.FC = () => (
  <div className="bg-blue-300 mx-auto container items-center">
    <header className="flex justify-between items-center">
      <h1 className="xl:font-serif text-4xl text-green-200">工華祭</h1>
      <div className="flex">
        <a href={Static.twitter.url}>
          <img
            className="container h-6 w-6"
            src={Static.twitter.icon}
            alt="Twitterのsvgアイコン"
          />
        </a>
        <a href={Static.instagram.url}>
          <img
            className="container h-7 w-7"
            src={Static.instagram.icon}
            alt="Instagramのsvgアイコン"
          />
        </a>
      </div>
    </header>
  </div>
);

export default Header;
