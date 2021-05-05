import { createStyles, Theme } from "@material-ui/core";
import { ToolboxClassKey } from "./types";

export const ToolboxStyles = (theme: Theme) => createStyles<ToolboxClassKey, {}>({
    root: {
        gridArea: "toolbox",
        border: "1px solid lightgrey",
    },
    header: {},
    content: {},
    segment: {}
});