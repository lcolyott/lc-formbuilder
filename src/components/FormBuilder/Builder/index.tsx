import { ClickAwayListener, Divider, Toolbar, Typography, withStyles } from "@material-ui/core";
import React from "react";
import ScrollArea from "../../ScrollArea";
import { BaseComponent } from "../Components";
import { ComponentItem } from "../Components/types";
import { BuilderStyles } from "./styles";
import { BuilderProps } from "./types";
import { ComponentMap } from "../Components/data";

const Builder: React.FunctionComponent<BuilderProps> = (props) => {
    const { classes, items, onMoveComponent, onSelectComponent, ...rest } = props;

    const renderComponents = (): JSX.Element => {
        function renderItem(item?: ComponentItem) {
            if (!item) { return; }

            let Component = ComponentMap.get(item.type ?? "");

            return (
                <Component id={item.index} index={item.index} item={item} layoutProps={item.layoutProps} onMove={onMoveComponent} onSelect={onSelectComponent}>
                    { items?.filter(child => child.pIndex === item.index).sort((a, b) => (a.sIndex as number) - (b.sIndex as number)).map((value, index) => renderItem(value))}
                </Component>
            );
        };

        return renderItem(items?.[0]) ?? <React.Fragment />;
    };

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
                        {renderComponents()}
                    </div>
                </ClickAwayListener>
            </ScrollArea>
        </div>
    );
};

export default withStyles(BuilderStyles)(Builder);