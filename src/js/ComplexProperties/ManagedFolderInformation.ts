import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class ManagedFolderInformation extends ComplexProperty {
    CanDelete: boolean;
    CanRenameOrMove: boolean;
    MustDisplayComment: boolean;
    HasQuota: boolean;
    IsManagedFoldersRoot: boolean;
    ManagedFolderId: string;
    Comment: string;
    StorageQuota: number;
    FolderSize: number;
    HomePage: string;
    private canDelete: boolean;
    private canRenameOrMove: boolean;
    private mustDisplayComment: boolean;
    private hasQuota: boolean;
    private isManagedFoldersRoot: boolean;
    private managedFolderId: string;
    private comment: string;
    private storageQuota: number;
    private folderSize: number;
    private homePage: string;
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ManagedFolderInformation.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ManagedFolderInformation.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = ManagedFolderInformation;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
