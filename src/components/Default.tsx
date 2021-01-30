import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Project from "./Project/Project";
import Access from "./Access/Access";
import BusInfo from "./BusInfo/BusInfo";
import Header from "./Header";


const Default: FC = () => {
    return(
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/project" component={Project}/>
                <Route path="/access" component={Access}/>
                <Route path="/busInfo" component={BusInfo}/>
            </Switch>
        </div>
    )
}

export default Default;