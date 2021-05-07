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
    const { children, classes, id, index, item, onSelect, ...rest } = props;
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

            const dragIndex = item.sIndex ?? 0;
            const hoverIndex = index ?? 0;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { return; }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { return; }

            // Move component
            // Cases: Same parent, new parent

            item.sIndex = hoverIndex;
        }
    });

    const [{ isDragging }, dragRef] = useDrag({
        type: "c",
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    // Combine the refs
    dragRef(dropRef(ref));

    return (
        <div ref={ref} data-handler-id={handlerId} className={classes?.root}>
            <div className={classes?.content}>
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