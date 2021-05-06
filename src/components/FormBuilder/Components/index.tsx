import { IconButton, Tooltip, withStyles } from "@material-ui/core";
import { Delete, Edit, FilterNone, OpenWith } from "@material-ui/icons";
import React from "react";
import { BaseComponentStyles } from "./styles";
import { BaseComponentProps } from "./types";

export const BaseComponent = withStyles(BaseComponentStyles)((props: BaseComponentProps & { children?: React.ReactNode }) => {
    const { children, classes, ...rest } = props;

    return (
        <div className={classes?.root}>
            <div className={classes?.content}>
                {children}
            </div>
            <div className={classes?.actions}>
                <Tooltip title={"Edit"}>
                    <IconButton size={"small"}>
                        <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip title={"Move"}>
                    <IconButton size={"small"}>
                        <OpenWith />
                    </IconButton>
                </Tooltip>
                <Tooltip title={"Delete"}>
                    <IconButton size={"small"}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
});