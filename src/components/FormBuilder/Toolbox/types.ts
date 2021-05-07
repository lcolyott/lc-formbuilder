import { StandardProps } from "@material-ui/core";
import { ComponentItem } from "../Components/types";

export type ToolboxItemClassKey = "root";
export type ToolboxClassKey = "root" | "header" | "container" | "content" | "segment" | "itemGrid";

export interface ToolboxItemProps extends StandardProps<{}, ToolboxItemClassKey> {
    item?: ComponentItem;
};
export interface ToolboxProps extends StandardProps<{}, ToolboxClassKey> { };