import { Divider, Toolbar, withStyles } from "@material-ui/core";
import React from "react";
import ScrollArea from "../../ScrollArea";
import { BaseComponent } from "../Components";
import { BuilderStyles } from "./styles";
import { BuilderProps } from "./types";

const Builder: React.FunctionComponent<BuilderProps> = (props) => {
    const { classes, ...rest } = props;

    return (
        <div className={classes?.root}>
            <Toolbar className={classes?.header}>
                Builder
            </Toolbar>
            <Divider variant={"middle"} />
            <ScrollArea>
                <div className={classes?.content}>
                    {Array(20).fill(0).map((value, index) => (
                        <BaseComponent key={index} layoutProps={{ draggable: index % 2 === 0 }} >
                            {index % 2 === 0 ? "Draggable" : "Not Draggable"}
                        </BaseComponent>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};

export default withStyles(BuilderStyles)(Builder);