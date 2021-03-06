import {Exception} from "./Exception";
export class InvalidOperationException extends Exception {
    ParamName: string = null;
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string = null, innerException: Exception = null) {
        super(message, innerException);        
    }
}