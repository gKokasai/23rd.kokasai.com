import React from "react";
import { Link } from "react-router-dom";
import { ToShowPages } from "../Pages";
import Static from "../../static";

const Footer: React.FC = () => (
  <footer className="bg-blue-300 w-full">
    <div className="container mx-auto pt-8 pb-4 w-full">
      <div className="flex flex-wrap justify-around">
        <div>
          <h4 className="font-semibold pb-2">ページ一覧</h4>
          <ul>
            {ToShowPages.map((page) => (
              <Link to={page.path} key={page.displayName}>
                <li className="pb-4">{page.displayName}</li>
              </Link>
            ))}
          </ul>
        </div>
        <ul>
          {
            // TODO: 仮リンクではなく、別ファイルで定義したものを参照する
          }
          <a href="/">
            <li className="pb-4">プライバシーポリシー</li>
          </a>
          <a href="https://www.gunma-ct.ac.jp/">
            <li className="pb-4">群馬高専公式サイト</li>
          </a>
          <a href={Static.instagram.url}>
            <li className="pb-4">Instagram</li>
          </a>
          <a href={Static.twitter.url}>
            <li className="pb-4">Twitter</li>
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
