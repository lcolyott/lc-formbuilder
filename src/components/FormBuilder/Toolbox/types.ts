import { StandardProps } from "@material-ui/core";

export type ToolboxClassKey = "root" | "header" | "content" | "segment"

export interface ToolboxProps extends StandardProps<{}, ToolboxClassKey> { };