import { IconButton, Tooltip, withStyles } from "@material-ui/core";
import { Delete, Edit, FilterNone, OpenWith } from "@material-ui/icons";
import React, { useRef } from "react";
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from "react-dnd";
import { BaseComponentStyles } from "./styles";
import { BaseComponentProps, ComponentItem } from "./types";

export const RootComponent = (props: BaseComponentProps & { children?: React.ReactNode }) => {
    return (
        <div style={{ display: "flex", flexGrow: 1, flexWrap: "wrap" }}>
            {props.children}
        </div>
    );
};

export const BaseComponent = withStyles(BaseComponentStyles)((props: BaseComponentProps & { children?: React.ReactNode }) => {
    const { children, classes, id, index, item, onMove, onSelect, ...rest } = props;
    const ref = useRef<HTMLDivElement>(null);

    const [{ handlerId }, dropRef] = useDrop({
        accept: "c",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            };
        },
        hover(item: ComponentItem, monitor: DropTargetMonitor) {
            console.log("hover");

            if (!ref.current) { return; }
        },
        drop(dragItem: ComponentItem, monitor: DropTargetMonitor) {
            if (!ref.current) { return; }
            if (!item) { return; }
            
            // Determine if this should go before or after the element it has been dropped on

            // handle drop instead and perform logic in root component
            onMove?.(dragItem, item);
        }
    });

    const [{ isDragging }, dragRef] = useDrag({
        type: "c",
        item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    // Combine the refs
    dragRef(dropRef(ref));

    return (
        <div ref={ref} data-handler-id={handlerId} className={classes?.root}>
            <div className={classes?.content}>
                {item?.name + " " + item?.index}
                {children}
            </div>
            <div className={classes?.actions}>
                <Tooltip title={"Edit"}>
                    <IconButton size={"small"} onClick={() => onSelect?.(item)}>
                        <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip title={"Move"}>
                    <IconButton size={"small"}>
                        <OpenWith />
                    </IconButton>
                </Tooltip>
                <Tooltip title={"Delete"}>
                    <IconButton size={"small"}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </div>
        </div >
    );
});