import { StandardProps } from "@material-ui/core";

export type ComponentEditorClassKey = "root" | "content"

export interface ComponentEditorProps extends StandardProps<{}, ComponentEditorClassKey> {
    item?: unknown;
}