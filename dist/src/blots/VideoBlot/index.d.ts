declare const BlockEmbed: any;
declare class VideoBlot extends BlockEmbed {
    static className: string;
    static blotName: string;
    static tagName: string;
    domNode: any;
    static create(value: any): HTMLElement;
    static formats(node: any): any;
    static value(node: any): any;
    format(name: any, value: any): void;
}
export default VideoBlot;
