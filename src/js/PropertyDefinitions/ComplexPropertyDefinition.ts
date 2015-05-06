import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import {EwsLogging} from "../Core/EwsLogging";
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");

import ComplexProperty = require("../ComplexProperties/ComplexProperty");
interface CreateComplexPropertyDelegate<TComplexProperty extends ComplexProperty> {
    (): TComplexProperty;
}

import ComplexPropertyDefinitionBase = require("./ComplexPropertyDefinitionBase");
class ComplexPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinitionBase {
    Type: any;// System.Type;
    private propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>;
    constructor(xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags,
        propertyCreationDelegate?: CreateComplexPropertyDelegate<TComplexProperty>) {
        super(xmlElementName, version, uri, flags);

        EwsLogging.Assert(
            propertyCreationDelegate != null,
            "ComplexPropertyDefinition ctor",
            "CreateComplexPropertyDelegate cannot be null");

        this.propertyCreationDelegate = propertyCreationDelegate;
    }

    CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("Not implemented."); }
}

export = ComplexPropertyDefinition;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
