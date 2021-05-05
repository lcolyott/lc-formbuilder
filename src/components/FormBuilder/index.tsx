import { withStyles } from "@material-ui/core";
import React from "react";
import { FormBuilderStyles } from "./styles";
import { FormBuilderProps, FormBuilderState } from "./types";

class FormBuilder extends React.PureComponent<FormBuilderProps, FormBuilderState> {
    constructor(props: FormBuilderProps) {
        super(props);
        this.state = {

        };
    };

    //#region Component Lifecycle Callbacks
    componentDidMount() { };
    componentDidUpdate() { };
    componentWillUnmount() { };
    //#endregion

    //#region Methods
    renderItem() { };

    addItem() { };
    removeItem() { };
    moveItem() { };
    removeItemsByType() { };
    removeAllItems() { };

    handleDrop() { };
    //#endregion

    render() {
        const { children, classes, className, style, ...rest } = this.props;

        return (
            <div>
                Form Builder
            </div>
        );
    }
};

export default withStyles(FormBuilderStyles)(FormBuilder);