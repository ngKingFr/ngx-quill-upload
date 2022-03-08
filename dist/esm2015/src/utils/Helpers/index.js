import Constants from '../Constants';
export default class Helper {
    constructor() {
        this.id = 0;
        this.prefix = 'QUILL_UPLOAD_HANDLER';
    }
    generateID() {
        const id = this.id;
        this.id = id + 1;
        return `${this.prefix}-${id}`;
    }
    loadingHTML() {
        return `<div id="${Constants.ID_SPLIT_FLAG}.QUILL-LOADING">
                        <span style="width:90%;"><span class="quill-progress">
                        </span></span>
                      </div>`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdXRpbHMvSGVscGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFFckMsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFNO0lBQTNCO1FBQ0UsT0FBRSxHQUFHLENBQUMsQ0FBQztRQUNQLFdBQU0sR0FBRyxzQkFBc0IsQ0FBQztJQVlsQyxDQUFDO0lBWEMsVUFBVTtRQUNSLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxXQUFXO1FBQ1QsT0FBTyxZQUFZLFNBQVMsQ0FBQyxhQUFhOzs7NkJBR2pCLENBQUM7SUFDNUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xuICBpZCA9IDA7XG4gIHByZWZpeCA9ICdRVUlMTF9VUExPQURfSEFORExFUic7XG4gIGdlbmVyYXRlSUQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuaWQ7XG4gICAgdGhpcy5pZCA9IGlkICsgMTtcbiAgICByZXR1cm4gYCR7dGhpcy5wcmVmaXh9LSR7aWR9YDtcbiAgfVxuICBsb2FkaW5nSFRNTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdiBpZD1cIiR7Q29uc3RhbnRzLklEX1NQTElUX0ZMQUd9LlFVSUxMLUxPQURJTkdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwid2lkdGg6OTAlO1wiPjxzcGFuIGNsYXNzPVwicXVpbGwtcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxufVxuXG4iXX0=