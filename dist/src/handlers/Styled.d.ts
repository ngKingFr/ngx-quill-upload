declare class Styled {
    private styles;
    private eStyle;
    constructor(styles?: any);
    setUp(): void;
    setStyle(styles: any): void;
    apply(): void;
}
export default Styled;
