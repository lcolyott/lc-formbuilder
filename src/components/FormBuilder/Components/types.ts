import { StandardProps } from "@material-ui/core";
import { CSSProperties } from "react";

export type ComponentClassKey = "root" | "content" | "actions";

export interface ComponentLayoutProps {
    fullWidth?: boolean;
};

export interface ComponentItem {
    index?: number;
    sIndex?: number;
    pIndex?: number;
    type?: string;
    name?: string;
    draggable?: boolean;
    droppable?: boolean;
    layoutProps?: ComponentLayoutProps;
    accept?: string[];
};

export interface BaseComponentProps extends StandardProps<{}, ComponentClassKey> {
    id?: any;
    item?: ComponentItem;
    index?: number;
    layoutProps?: ComponentLayoutProps;
    onMove?: (dragItem: ComponentItem, dropItem: ComponentItem) => void;
    onSelect?: (item?: ComponentItem) => void;
};