import React from "react";
import { Route, Switch } from "react-router-dom";
import FormBuilder from "../../components/FormBuilder";
import FormEditor from "./Editor";
import FormViewer from "./Viewer";

const Forms: React.FunctionComponent<any> = (props) => {
    return (
        <Switch>
            <Route path={"/"} component={FormBuilder} />
            <Route path={"/view"} component={FormViewer} />
            <Route path={"/editor"} component={FormEditor} />
        </Switch>
    );
};

export default Forms;