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
import ComponentEditor from "./ComponentEditor";
import { ComponentItem } from "./Components/types";
import { BaseComponent } from "./Components";

class FormBuilder extends React.PureComponent<FormBuilderProps, FormBuilderState> {
    constructor(props: FormBuilderProps) {
        super(props);
        this.state = {
            selectedItem: undefined,
            items: [
                { index: 0, sIndex: 0, pIndex: undefined, type: "root", name: "root" },
                { index: 1, sIndex: 0, pIndex: 0, type: "c", name: "component", layoutProps: { fullWidth: true } },
                { index: 2, sIndex: 1, pIndex: 0, type: "c", name: "component" },
            ]
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.moveItem = this.moveItem.bind(this);
        this.removeItemsByType = this.removeItemsByType.bind(this);
        this.removeAllItems = this.removeAllItems.bind(this);

        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);

        this.handleSelectComponent = this.handleSelectComponent.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    };

    //#region Component Lifecycle Callbacks
    componentDidMount() { };
    componentDidUpdate() { };
    componentWillUnmount() { };
    //#endregion

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

    //#region Event Handlers
    handleSelectComponent(item?: ComponentItem) {
        console.log("Editing Component", item);
        this.setState({
            selectedItem: item
        });
    };

    handleDrop() {

    };
    //#endregion

    //#region Render Methods
    render() {
        const { children, classes, className, style, ...rest } = this.props;

        return (
            <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
                <div className={classes?.layout}>
                    <ComponentEditor item={this.state.selectedItem} />
                    <Builder items={this.state.items} onSelectComponent={this.handleSelectComponent} />
                    <Toolbox />
                    <div className={classes?.actions}>
                        <Button variant={"contained"} onClick={this.save}>Save</Button>
                        <Button variant={"contained"} onClick={this.clear}>Clear</Button>
                    </div>
                </div>
            </DndProvider>
        );
    }
    //#endregion
};

export default withStyles(FormBuilderStyles)(FormBuilder);