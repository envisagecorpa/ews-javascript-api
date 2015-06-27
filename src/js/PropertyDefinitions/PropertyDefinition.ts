﻿import {ServiceObjectSchema} from "../Core/ServiceObjects/Schemas/ServiceObjectSchema";
//import ServiceObjectSchemaExtension = require("../Core/ServiceObjects/Schemas/ServiceObjectSchemaExtension");
import {ExchangeService} from "../Core/ExchangeService";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlElementNames} from "../Core/XmlElementNames";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {PropertyBag} from "../Core/PropertyBag";


import {StringHelper} from "../ExtensionMethods";

import {ServiceObjectPropertyDefinition} from "./ServiceObjectPropertyDefinition";

//should be done
export class PropertyDefinition extends ServiceObjectPropertyDefinition {
    get Version(): ExchangeVersion { return this.version; }
    get IsNullable(): boolean { return true; }
    get XmlElementName(): string { return this.xmlElementName; }
    get Name(): string {
        if (StringHelper.IsNullOrEmpty(this.name)) {
            throw new Error("incorrectly registered propertynames - info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error");
            //todo:fix: can not use this to initialize names, ServiceObjectSchema creates circular loops in modules.
            //ServiceObjectSchema.InitializeSchemaPropertyNames(); //info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error
            //fix - did not work , shifted to statically initialize by constructer in this class ServiceObjectSchemaExtension.InitializeSchemaPropertyNames(); //info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error
        }
        return this.name;
    }
    set Name(value: string) { this.name = value; }
    private xmlElementName: string;
    private flags: PropertyDefinitionFlags;
    private name: string;
    private version: ExchangeVersion;

    constructor(
        propertyName: string,
        xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags) {

        super(uri);
        this.name = propertyName;
        this.flags = flags;
        this.xmlElementName = xmlElementName;
        this.version = version;
    }

    GetAssociatedInternalProperties(): PropertyDefinition[] /*System.Collections.Generic.List<PropertyDefinition>*/ {
        var properties: PropertyDefinition[] = [];

        this.RegisterAssociatedInternalProperties(properties);

        return properties;
    }
    GetPrintableName(): string { return this.Name; }
    //HasFlag(flag: PropertyDefinitionFlags): boolean { throw new Error("PropertyDefinition.ts - HasFlag : Not implemented."); }
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean {
        return (this.flags & flag) == flag;
    }
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("PropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void { /*throw new Error("abstract method, must implement");*/ }
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]/* System.Collections.Generic.List<PropertyDefinition>*/): any {
    }
    WriteJsonValue(jsonObject: any, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("PropertyDefinition.ts - WriteJsonValue : Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        throw new Error("abstract method, must implement.");
    }
}