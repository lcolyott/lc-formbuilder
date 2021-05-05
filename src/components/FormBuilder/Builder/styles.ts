import { Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import { BuilderClassKey } from "./types";

export const BuilderStyles = (theme: Theme) => createStyles<BuilderClassKey, {}>({
    root: {
        gridArea: "builder",
        border: "1px solid lightgrey",
    },
    header: {

    },
    content: {

    }
});