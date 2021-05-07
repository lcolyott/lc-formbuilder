import { Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import { BuilderClassKey } from "./types";

export const BuilderStyles = (theme: Theme) => createStyles<BuilderClassKey, {}>({
    root: {
        display: "flex",
        flexDirection: "column",

        gridArea: "builder",
        border: "1px solid lightgrey",
    },
    header: {

    },
    content: {
        display: "flex",
        flexDirection: "column",

        gap: ".25rem",

        padding: "1rem",

        width: "100%",
        minHeight: "100%",

        boxSizing: "border-box",

        outline: "rgb(175,175,175) dashed 2px",
        outlineOffset: "-1rem",
    }
});