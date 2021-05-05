import { Button, Container, Divider, Toolbar, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { FormBuilderStyles } from "./styles";
import { FormBuilderProps, FormBuilderState } from "./types";
import { isMobile } from "react-device-detect";
import Builder from "./Builder";
import Toolbox from "./Toolbox";

class FormBuilder extends React.PureComponent<FormBuilderProps, FormBuilderState> {
    constructor(props: FormBuilderProps) {
        super(props);
        this.state = {

        };

        this.renderItem = this.renderItem.bind(this);

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.moveItem = this.moveItem.bind(this);
        this.removeItemsByType = this.removeItemsByType.bind(this);
        this.removeAllItems = this.removeAllItems.bind(this);

        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);

        this.handleDrop = this.handleDrop.bind(this);
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

    clear() {
        console.log("Clear");
    };

    save() {
        console.log("Save");
    };
    //#endregion

    //#region Event Handlers
    handleDrop() { };
    //#endregion

    render() {
        const { children, classes, className, style, ...rest } = this.props;

        return (
            <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
                <Container className={classes?.root}>
                    <div className={classes?.layout}>
                        <Builder />
                        <Toolbox />
                        <div className={classes?.actions}>
                            <Button variant={"contained"} onClick={this.save}>Save</Button>
                            <Button variant={"contained"} onClick={this.clear}>Clear</Button>
                        </div>
                    </div>
                </Container>
            </DndProvider>
        );
    }
};

export default withStyles(FormBuilderStyles)(FormBuilder);