import { Divider, Toolbar, withStyles } from "@material-ui/core";
import React from "react";
import { BuilderStyles } from "./styles";
import { BuilderProps } from "./types";

const Builder: React.FunctionComponent<BuilderProps> = (props) => {
    const { classes, ...rest } = props;

    return (
        <div className={classes?.root}>
            <Toolbar className={classes?.header}>
                Builder
            </Toolbar>
            <Divider variant={"middle"} />
            <div className={classes?.content}>

            </div>
        </div>
    );
};

export default withStyles(BuilderStyles)(Builder);