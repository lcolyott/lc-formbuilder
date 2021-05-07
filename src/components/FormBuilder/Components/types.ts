import { StandardProps } from "@material-ui/core";
import { CSSProperties } from "react";

export type ComponentClassKey = "root" | "content" | "actions";

export interface ComponentLayoutProps {
    draggable?: boolean;
    droppable?: boolean;
    fullWidth?: boolean;
};

export interface BaseComponentProps extends StandardProps<{}, ComponentClassKey> {
    layoutProps?: ComponentLayoutProps;
    onEdit?: (item: unknown) => void
};