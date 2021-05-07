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
    spacer: {
        height: "2rem",
    },
    feather: {
        position: "absolute",
        right: 0,
        bottom: 0,
        left: 0,
        height: "4rem",

        background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",

        pointerEvents: "none",
    }
}), { name: "ScrollArea" });

export default function ScrollArea(props: { children?: React.ReactNode }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.scrollContent}>
                {props.children}
                <div className={classes.spacer} />
            </div>
            <div className={classes.feather} />
        </div>
    );
};