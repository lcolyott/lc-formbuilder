import { Divider, Toolbar, withStyles } from "@material-ui/core";
import React from "react";
import { ToolboxStyles } from "./styles";
import { ToolboxProps } from "./types";

const Toolbox: React.FunctionComponent<ToolboxProps> = (props) => {
    const { classes, ...rest } = props;

    return (
        <div className={classes?.root}>
            <Toolbar className={classes?.header}>
                Toolbox
            </Toolbar>
            <Divider variant={"middle"} />
            <div className={classes?.content}>

            </div>
        </div>
    );
};

export default withStyles(ToolboxStyles)(Toolbox);