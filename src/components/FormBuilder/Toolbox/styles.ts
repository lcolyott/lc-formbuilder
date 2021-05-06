import { createStyles, Theme } from "@material-ui/core";
import { convertToObject } from "typescript";
import { ToolboxClassKey, ToolboxItemClassKey } from "./types";

export const ToolboxItemStyles = (theme: Theme) => createStyles<ToolboxItemClassKey, {}>({
    root: {
        position: "relative",

        display: "flex",
        flexBasis: "calc(33.333% - .5rem)",

        boxSizing: "border-box",

        alignItems: "center",
        justifyContent: "center",

        border: "1px solid " + theme.palette.divider,

        cursor: "grab",

        "&:before": {
            content: "''",
            display: "block",
            paddingTop: "100%",
        }
    },
});

export const ToolboxStyles = (theme: Theme) => createStyles<ToolboxClassKey, {}>({
    root: {
        display: "flex",
        flexDirection: "column",

        gridArea: "toolbox",

        border: "1px solid lightgrey",
    },
    header: {

    },
    container: {
        position: "relative",

        flexGrow: 1,

        padding: "1rem",
    },
    content: {
        position: "relative",

        display: "inline-block",

        width: "100%",

        overflow: "hidden",
    },
    segment: {
        marginBottom: ".5rem",
    },
    itemGrid: {
        display: "flex",
        flexWrap: "wrap",
        gap: ".5rem",
    }
});