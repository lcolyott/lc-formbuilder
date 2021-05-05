import { StyledComponentProps } from "@material-ui/styles";
import React from "react";
import { StandardProps } from "../../types";

export type FormBuilderClassKey = "root" | "builder" | "toolbox";

export interface FormBuilderProps extends StandardProps<{}, FormBuilderClassKey> { };

export interface FormBuilderState {

};