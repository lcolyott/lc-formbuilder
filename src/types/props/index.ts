import { StyledComponentProps } from "@material-ui/styles";
import React from "react";

/** A carbon copy of Material UIs "StandardProps" interface */
export type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> = Omit<
    C,
    'classes' | Removals
> & StyledComponentProps<ClassKey> & {
    className?: string;
    ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    style?: React.CSSProperties;
};