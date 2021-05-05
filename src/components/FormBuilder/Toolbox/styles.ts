import { createStyles, Theme } from "@material-ui/core";
import { ToolboxClassKey } from "./types";

export const ToolboxStyles = (theme: Theme) => createStyles<ToolboxClassKey, {}>({
    root: {
        display: "flex",
        flexDirection: "column",

        gridArea: "toolbox",

        border: "1px solid lightgrey",
    },
    header: {

    },
    content: {
        position: "relative",

        flexGrow: 1,

        padding: "1rem",

        overflow: "hidden",
    },
    segment: {
        marginBottom: ".5rem",
        border: "1px dashed lightgrey"
    }
});