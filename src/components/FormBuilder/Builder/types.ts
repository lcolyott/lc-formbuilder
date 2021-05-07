import { StandardProps } from "@material-ui/core";

export type BuilderClassKey = "root" | "header" | "content";

export interface BuilderProps extends StandardProps<{}, BuilderClassKey> {
    onSelectComponent?: (item: unknown) => void;
};