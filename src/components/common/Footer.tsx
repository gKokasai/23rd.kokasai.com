import React from "react";
import Pages from "../Pages";

const Footer: React.FC = () => (
  <footer className="bg-blue-300 w-full">
    <div className="container mx-auto pt-8 pb-4 w-full">
      <div className="flex flex-wrap justify-around">
        <div>
          <h4 className="font-semibold pb-2">ページ一覧</h4>
          <ul>
            {
              // TODO: 各ページ実装後、仮リンクではなく実装する
              Object.keys(Pages).map((key) => (
                <a href="/">
                  <li className="pb-4" key={key}>
                    {Pages[key].displayName}
                  </li>
                </a>
              ))
            }
          </ul>
        </div>
        <ul>
          <a href={Pages.privacyPolicy.path}>
            <li>{Pages.privacyPolicy.displayName}</li>
          </a>
        </ul>
      </div>
      <div className="text-center">
        <small>© 2021 工華祭実行委員会</small>
      </div>
    </div>
  </footer>
);

export default Footer;
