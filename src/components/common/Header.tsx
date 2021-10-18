import React, { useState } from "react";
import Static from "../../static";
import { Pages } from "../Pages";

const Header: React.FC = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);
  return (
    <div className="bg-midBlue mx-auto container items-center">
      <header className="flex justify-between">
        <h1 className="text-4xl text-white">工華祭</h1>
        <input
          type="image"
          src={Static.hamburgerMenu.icon}
          alt="ハンバーガーメニューのアイコン"
          className="w-10"
          onClick={() => setOpenHamburger(!openHamburger)}
        />
      </header>
      <div className={openHamburger ? "inline-block" : "hidden"}>
        <div className="container">
          <ul className="flex flex-col pb-2">
            {Object.keys(Pages).map((key) => (
              <div className="border-b-2" key={key}>
                <a href="/">
                  <li className="pt-4">{Pages[key].displayName}</li>
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
