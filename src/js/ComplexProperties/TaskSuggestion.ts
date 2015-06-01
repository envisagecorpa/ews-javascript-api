import ExtractedEntity = require("./ExtractedEntity");
import EmailUserEntityCollection = require("./EmailUserEntityCollection");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class TaskSuggestion extends ExtractedEntity {
    TaskString: string;
    Assignees: EmailUserEntityCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("TaskSuggestion.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = TaskSuggestion;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
