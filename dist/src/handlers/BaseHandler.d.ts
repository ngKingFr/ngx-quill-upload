import { Helpers } from '../utils';
interface Range {
    index: number;
    length: number;
}
export interface Options {
    accepts: string[];
    upload(file: File): Promise<string>;
}
declare class BaseHandler {
    quill: any;
    options: Options;
    range: Range | null;
    handler: string;
    loading: HTMLElement;
    fileHolder: HTMLInputElement;
    handlerId: string;
    helpers: Helpers;
    allowedFormatRegex: RegExp;
    possibleExtension: Set<string>;
    constructor(quill: any, options: Options);
    applyForToolbar(): void;
    selectLocalFile(): void;
    loadFile(context: any): {
        file: any;
        handlerId: string;
    };
    fileChanged(): void;
    embedFile(file: File, handlerId: string): void;
    insertBase64Data(url: string | ArrayBuffer, handlerId: string): void;
    insertFileToEditor(url: string, handlerId: string): void;
    isValidExtension(extension: string): boolean;
    hasValidMimeType(type: string): boolean;
    isNotExistLoading(): boolean;
}
export default BaseHandler;
