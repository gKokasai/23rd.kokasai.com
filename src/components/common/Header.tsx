import React, { useState } from "react";
import Static from "../../static";
import Pages from "../Pages";

const Header: React.FC = () => {
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);
  return (
    <div className="bg-midBlue mx-auto container items-center">
      <header className="flex justify-between">
        <h1 className="font-serif text-4xl text-white">工華祭</h1>
        <div className="w-10" onClick={() => setOpenHamburger(!openHamburger)}>
          <img
            src={Static.hamburgerMenu.icon}
            alt="ハンバーガーメニューのアイコン"
          />
        </div>
      </header>
      <div className={openHamburger ? "inline-block" : "hidden"}>
        <div className="container">
          <ul className="flex flex-col justify-end">
            {
              // TODO: 各ページ実装後、仮リンクではなく実装する
              Object.keys(Pages).map((key) => (
                <a href="/">
                  <li className="pt-4" key={key}>
                    {Pages[key].displayName}
                  </li>
                </a>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
