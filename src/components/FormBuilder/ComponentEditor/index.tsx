import { Divider, Toolbar, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { ComponentEditorStyles } from "./styles";
import { ComponentEditorProps } from "./types";

const ComponentEditor = withStyles(ComponentEditorStyles)((props: React.PropsWithChildren<ComponentEditorProps>) => {
    const { classes, ...rest } = props;

    return (
        <div className={classes?.root}>
            <Toolbar>
                <Typography variant={"h5"} color={"textSecondary"}>
                    Editor
                </Typography>
            </Toolbar>
            <Divider variant={"middle"} />
            <div className={classes?.content}>

            </div>
        </div>
    );
});

export default ComponentEditor;