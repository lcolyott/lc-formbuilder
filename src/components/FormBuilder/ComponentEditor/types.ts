import { StandardProps } from "@material-ui/core";
import { ComponentItem } from "../Components/types";

export type ComponentEditorClassKey = "root" | "content"

export interface ComponentEditorProps extends StandardProps<{}, ComponentEditorClassKey> {
    item?: ComponentItem;
}