import { Divider, Toolbar, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ScrollArea from "../../ScrollArea";
import { ToolboxStyles } from "./styles";
import { ToolboxProps } from "./types";

const Toolbox: React.FunctionComponent<ToolboxProps> = (props) => {
    const { classes, ...rest } = props;

    const Segment = (props: { children?: React.ReactNode, title: string }) => {
        return (
            <div className={classes?.segment}>
                <Typography variant={"h5"} color={"textSecondary"}>
                    {props.title}
                </Typography>
                <div>
                    {props.children}
                </div>
            </div>
        );
    }

    return (
        <div className={classes?.root}>
            <Toolbar className={classes?.header}>
                Toolbox
            </Toolbar>
            <Divider variant={"middle"} />
            <div className={classes?.content}>
                <ScrollArea>
                    {Array(3).fill(0).map((value, index) => (
                        <Segment title={"Segment"} key={index}>
                            children go here
                        </Segment>
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
};

export default withStyles(ToolboxStyles)(Toolbox);