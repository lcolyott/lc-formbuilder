import { createStyles, Theme } from "@material-ui/core";
import { BaseComponentProps, ComponentClassKey } from "./types";

export const BaseComponentStyles = (theme: Theme) => createStyles<ComponentClassKey, BaseComponentProps>({
    root: {
        position: "relative",

        flexBasis: props => props.layoutProps?.fullWidth ? "100%" : "100px",

        border: "1px dashed grey",

        "&:hover": {
            backgroundColor: "rgba(100, 100, 100, .1)",

            "& > $actions": {
                opacity: 1
            }
        },

        cursor: props => props.layoutProps?.draggable ? "grab" : "pointer",

        transition: "background-color .3s",
    },
    content: {

    },
    actions: {
        position: "absolute",
        top: "-.5rem",
        right: "-.5rem",

        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",

        width: "10rem",
        height: "2.5rem",

        backgroundColor: "lightgrey",
        border: "1px dashed grey",
        borderRadius: "4px",

        opacity: 0,

        transition: "opacity .3s",
    }
});