import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: "relative",
        width: "100%",
        height: "100%",

        overflow: "hidden",
    },
    scrollContent: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,

        overflow: "scroll",

        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none",
        }
    },
}), { name: "ScrollArea" });

export default function ScrollArea(props: { children?: React.ReactNode }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.scrollContent}>
                {props.children}
            </div>
        </div>
    );
};