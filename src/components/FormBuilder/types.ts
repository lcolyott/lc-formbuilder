import { StyledComponentProps, StandardProps } from "@material-ui/core";
import React from "react";

export type FormBuilderClassKey = "root" | "layout" | "builder" | "toolbox";

export interface FormBuilderProps extends StandardProps<{}, FormBuilderClassKey> { };

export interface FormBuilderState {

};