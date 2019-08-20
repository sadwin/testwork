import React from "react";
import { Route } from "react-router-dom";
import * as actions from './store/actions/auth';
import Login from "./containers/Login";

const BaseRouterSecond = () => (
    <div>
        <Route exact path="/" component={Login} />{" "}
    </div>
);

export default BaseRouterSecond;