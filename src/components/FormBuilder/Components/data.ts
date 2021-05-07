import React from "react";

// TODO: Create a hook to gain access to components
// TODO: Create registry system to allow users to create new widgets and add them to the component map

import { BaseComponent, RootComponent } from ".";
import { BaseComponentProps } from "./types";

const ComponentMap = new Map<string, any>();

ComponentMap.set("root", RootComponent);
ComponentMap.set("c", BaseComponent);

export { ComponentMap };