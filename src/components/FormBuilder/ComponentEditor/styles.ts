import { createStyles, Theme } from "@material-ui/core";
import { ComponentEditorClassKey } from "./types";

export const ComponentEditorStyles = (theme: Theme) => createStyles<ComponentEditorClassKey, {}>({
    root: {
        gridArea: "editor",
        border: "1px solid lightgrey",

        boxSizing: "border-box",
    },
    content: {},
});