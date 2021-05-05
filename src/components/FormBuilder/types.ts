import { StyledComponentProps, StandardProps } from "@material-ui/core";
import React from "react";

export type FormBuilderClassKey = "root" | "layout" | "actions";

export interface FormBuilderProps extends StandardProps<{}, FormBuilderClassKey> { };

export interface FormBuilderState {

};