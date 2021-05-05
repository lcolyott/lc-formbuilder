import React from "react";
import { Route, Switch } from "react-router-dom";
import FormEditor from "./Editor";
import FormViewer from "./Viewer";

const Forms: React.FunctionComponent<any> = (props) => {

    const View = () => {
        return (
            <div>
                Forms
            </div>
        );
    };

    return (
        <div>
            <Switch>
                <Route path={"/"} component={View} />
                <Route path={"/view"} component={FormViewer} />
                <Route path={"/editor"} component={FormEditor} />
            </Switch>
        </div>
    );
};

export default Forms;