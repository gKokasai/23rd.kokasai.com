import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: FC = (): JSX.Element => (
  <nav className="navbar navbar-expand-sm">
    <Link className="navbar-brand" to="/">
      工華祭
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            トップ
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/project">
            企画
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/" className="dropdown-item">
              Test
            </Link>
            <Link to="/" className="dropdown-item">
              Test
            </Link>
            <Link to="/" className="dropdown-item">
              Test
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            ログイン
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/busInfo">
            バス情報
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/access">
            アクセス
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
