import { ClickAwayListener, Divider, Toolbar, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ScrollArea from "../../ScrollArea";
import { BaseComponent } from "../Components";
import { BuilderStyles } from "./styles";
import { BuilderProps } from "./types";

const Builder: React.FunctionComponent<BuilderProps> = (props) => {
    const { classes, onSelectComponent, ...rest } = props;

    return (
        <div className={classes?.root}>
            <Toolbar className={classes?.header}>
                <Typography variant={"h5"} color={"textSecondary"}>
                    Builder
                </Typography>
            </Toolbar>
            <Divider variant={"middle"} />
            <ScrollArea>
                <ClickAwayListener onClickAway={() => onSelectComponent?.(undefined)}>
                    <div className={classes?.content}>
                        {Array(20).fill(0).map((value, index) => (
                            <BaseComponent key={index} item={{ name: `item ${index}` }} layoutProps={{ draggable: index % 2 === 0 }} onSelect={onSelectComponent}>
                                {index % 2 === 0 ? "Draggable" : "Not Draggable"}
                            </BaseComponent>
                        ))}
                    </div>
                </ClickAwayListener>
            </ScrollArea>
        </div>
    );
};

export default withStyles(BuilderStyles)(Builder);