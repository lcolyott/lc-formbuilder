import { StandardProps } from "@material-ui/core";
import { CSSProperties } from "react";

export type ComponentClassKey = "root" | "content" | "actions";

export interface ComponentLayoutProps {
    draggable?: boolean;
    droppable?: boolean;
    fullWidth?: boolean;
};

export interface ComponentItem {
    index?: number;
    sIndex?: number;
    pIndex?: number;
    type?: string;
    name?: string;
    layoutProps?: ComponentLayoutProps;
};

export interface BaseComponentProps extends StandardProps<{}, ComponentClassKey> {
    id?: any;
    item?: ComponentItem;
    index?: number;
    layoutProps?: ComponentLayoutProps;
    onSelect?: (item?: ComponentItem) => void
};