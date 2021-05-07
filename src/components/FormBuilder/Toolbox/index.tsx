import { Divider, Toolbar, Tooltip, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ScrollArea from "../../ScrollArea";
import { ToolboxItemStyles, ToolboxStyles } from "./styles";
import { ToolboxItemProps, ToolboxProps } from "./types";

const ToolboxItem = withStyles(ToolboxItemStyles)((props: ToolboxItemProps) => {
    const { classes, ...rest } = props;

    return (
        <Tooltip
            title={"Item"}
            PopperProps={{
                modifiers: {
                    offset: {
                        offset: "0, -35%"
                    },
                    flip: {
                        enabled: false,
                    }
                }
            }}
        >
            <div className={classes?.root}>
                Item
            </div>
        </Tooltip>
    );
});

const Toolbox: React.FunctionComponent<ToolboxProps> = (props) => {
    const { classes, ...rest } = props;

    const Segment = (props: { children?: React.ReactNode, title: string }) => {
        return (
            <div className={classes?.segment}>
                <Typography gutterBottom variant={"h5"} color={"textSecondary"}>
                    {props.title}
                </Typography>
                <div className={classes?.itemGrid}>
                    {props.children}
                </div>
            </div>
        );
    }

    return (
        <div className={classes?.root}>
            <Toolbar className={classes?.header}>
                <Typography variant={"h5"} color={"textSecondary"}>
                    Toolbox
                </Typography>
            </Toolbar>
            <Divider variant={"middle"} />
            <div className={classes?.container}>
                <ScrollArea>
                    <div className={classes?.content}>
                        {Array(10).fill(0).map((value, index) => (
                            <Segment title={"Segment"} key={index}>
                                <ToolboxItem />
                            </Segment>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default withStyles(ToolboxStyles)(Toolbox);