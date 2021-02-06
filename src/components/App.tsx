import React, { useState, FC } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './Home/Home';
import Project from './Project/Project';
import Access from './Access/Access';
import BusInfo from './BusInfo/BusInfo';
import Header from './common/Header';
import Login from './Login/Login';
import Account from './Account/Account';
import Auth from './Auth/Auth';

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
