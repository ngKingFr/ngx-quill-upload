import { Constants } from '../utils';
class Styled {
    constructor(styles) {
        this.styles = styles;
        this.setUp();
    }
    setUp() {
        this.eStyle = document.createElement('style');
        this.eStyle.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(this.eStyle);
    }
    setStyle(styles) {
        this.styles = styles;
    }
    apply() {
        this.eStyle.appendChild(document.createTextNode(this.styles || Constants.DEFAULT_STYLES));
    }
}
export default Styled;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R5bGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2hhbmRsZXJzL1N0eWxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXJDLE1BQU0sTUFBTTtJQUdWLFlBQVksTUFBTztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDOUIsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFNO1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FDakUsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELGVBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jbGFzcyBTdHlsZWQge1xuICBwcml2YXRlIHN0eWxlczogYW55O1xuICBwcml2YXRlIGVTdHlsZTogSFRNTFN0eWxlRWxlbWVudDtcbiAgY29uc3RydWN0b3Ioc3R5bGVzPykge1xuICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzO1xuXG4gICAgdGhpcy5zZXRVcCgpO1xuICB9XG5cbiAgc2V0VXAoKSB7XG4gICAgdGhpcy5lU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHRoaXMuZVN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQodGhpcy5lU3R5bGUpO1xuICB9XG5cbiAgc2V0U3R5bGUoc3R5bGVzKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBzdHlsZXM7XG4gIH1cblxuICBhcHBseSgpIHtcbiAgICB0aGlzLmVTdHlsZS5hcHBlbmRDaGlsZChcbiAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuc3R5bGVzIHx8IENvbnN0YW50cy5ERUZBVUxUX1NUWUxFUylcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZDtcbiJdfQ==