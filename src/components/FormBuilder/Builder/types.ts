import { StandardProps } from "@material-ui/core";
import { ComponentItem } from "../Components/types";

export type BuilderClassKey = "root" | "header" | "content";

export interface BuilderProps extends StandardProps<{}, BuilderClassKey> {
    items?: ComponentItem[];
    onMoveComponent?: (dragItem: ComponentItem, dropItem: ComponentItem) => void;
    onSelectComponent?: (item?: ComponentItem) => void;
};