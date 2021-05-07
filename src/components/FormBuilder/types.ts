import { StyledComponentProps, StandardProps } from "@material-ui/core";
import React from "react";
import { ComponentItem } from "./Components/types";

export type FormBuilderClassKey = "root" | "layout" | "actions";

export interface FormBuilderProps extends StandardProps<{}, FormBuilderClassKey> { };

export interface FormBuilderState {
    selectedItem?: ComponentItem;
    items?: ComponentItem[];
};