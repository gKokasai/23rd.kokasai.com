import React, { useState, FC } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Access from './pages/Access';
import BusInfo from './pages/BusInfo';
import Header from './common/Header';
import Login from './pages/Login';
import Account from './pages/Account';
import Auth from './pages/Auth';
import './App.scss';

const App: FC = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  return (
    <div className="app">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/access" component={Access} />
            <Route path="/busInfo" component={BusInfo} />
            <Route path="/login" render={() => <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
            <Route path="/account" render={() => <Account user={user} isLoggedIn={isLoggedIn} />} />
            <Route path="/auth" render={() => <Auth />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
