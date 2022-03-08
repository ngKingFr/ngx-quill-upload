declare const BlockEmbed: EmbedBlot;
interface EmbedBlot {
    new (...args: any[]): EmbedBlot;
    domNode: HTMLImageElement;
    format(name: any, value: any): any;
    create(value?: any): any;
}
declare class ImageBlot extends BlockEmbed {
    static tagName: string;
    static blotName: string;
    static className: string;
    static create(value: any): HTMLElement;
    static value(node: any): object;
    static formats(domNode: any): {};
    format(name: any, value: any): void;
}
export default ImageBlot;
