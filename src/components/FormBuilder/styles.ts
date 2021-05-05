import { createStyles, Theme } from "@material-ui/core";
import { FormBuilderClassKey } from "./types";

export const FormBuilderStyles = (theme: Theme) => createStyles<FormBuilderClassKey, {}>({
    root: {
        position: "relative",

        paddingTop: "1rem",
        paddingBottom: "1rem",

        width: "100%",
        height: "100%",
    },
    layout: {
        display: "grid",
        gridTemplateRows: "auto 5rem",
        gridTemplateColumns: "auto 17.5rem",
        gridTemplateAreas: `
        "builder toolbox"
        "actions actions"
        `,
        gap: "1rem",

        width: "100%",
        height: "100%",
    },
    actions: {
        display: "flex",
        justifyContent: "flex-end",
        gap: ".5rem",

        padding: "1rem",

        gridArea: "actions",

        border: "1px solid lightgray",

        "& > *": {
            width: "20ch",
        }
    },
});