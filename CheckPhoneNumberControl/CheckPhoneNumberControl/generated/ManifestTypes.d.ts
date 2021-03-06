/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    valueField: ComponentFramework.PropertyTypes.StringProperty;
    outputFormat: ComponentFramework.PropertyTypes.EnumProperty<"International" | "National" | "E164">;
    defaultCC: ComponentFramework.PropertyTypes.StringProperty;
    allowedCC: ComponentFramework.PropertyTypes.StringProperty;
    excludedCC: ComponentFramework.PropertyTypes.StringProperty;
    allowedType: ComponentFramework.PropertyTypes.StringProperty;
    excludedType: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    valueField?: string;
}
