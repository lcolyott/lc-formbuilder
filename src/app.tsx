import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Forms from "./views/Forms";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
    },
    layout: {
        display: "grid",
        gridTemplateRows: "4rem auto",
        gridTemplateColumns: "auto",
        gridTemplateAreas: `
        "header"
        "content"
        `,

        width: "100%",
        height: "100%",
    },
    appHeader: {
        gridArea: "header",

        borderBottom: "1px solid lightgray",
    },
    content: {
        position: "relative",
        gridArea: "content",

        overflow: "hidden",

        "& > .scrollArea": {
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
        }
    },
    sidebar: {
        gridArea: "sidebar",

        borderRight: "1px solid lightgrey"
    }
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.layout}>
                <div className={classes.appHeader}>

                </div>
                <div className={classes.content}>
                    <div className={"scrollArea"}>
                        <Forms />
                    </div>
                </div>
            </div>
        </div>
    );
};