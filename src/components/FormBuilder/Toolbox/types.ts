import { StandardProps } from "@material-ui/core";

export type ToolboxItemClassKey = "root";
export type ToolboxClassKey = "root" | "header" | "container" | "content" | "segment" | "itemGrid";

export interface ToolboxItemProps extends StandardProps<{}, ToolboxItemClassKey> { };
export interface ToolboxProps extends StandardProps<{}, ToolboxClassKey> { };