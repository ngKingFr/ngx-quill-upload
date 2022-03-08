export default {
    ID_SPLIT_FLAG: '__ID_SPLIT__',
    QUILL_UPLOAD_HOLDER_CLASS_NAME: 'quill-upload-progress',
    DEFAULT_STYLES: `
    .quill-progress-wrapper {
      height: 0.25rem;
      position: relative;
      background: #f3efe6;
      overflow: hidden;
      margin-top: 0;
    }

    .quill-progress-wrapper span {
      display: block;
      height: 100%;
    }

    .quill-progress {
      background-color: #3498db;
      animation: progressBar 10s ease-in-out;
      animation-fill-mode:both;
    }

    @keyframes progressBar {
      0% { width: 0; }
      100% { width: 100%; }
    }

    .d-none {
      display: none;
    }

    .quill-upload-progress {
      opacity: 0.3;
    }
  `,
    blots: {
        video: 'video',
        image: 'image',
    },
    LOADING_CLASS_NAME: 'quill-progress-wrapper',
    NONE_DISPLAY_CLASS_NAME: 'd-none',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdXRpbHMvQ29uc3RhbnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7SUFDYixhQUFhLEVBQUUsY0FBYztJQUM3Qiw4QkFBOEIsRUFBRSx1QkFBdUI7SUFDdkQsY0FBYyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDZjtJQUNELEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxPQUFPO1FBQ2QsS0FBSyxFQUFFLE9BQU87S0FDZjtJQUNELGtCQUFrQixFQUFFLHdCQUF3QjtJQUM1Qyx1QkFBdUIsRUFBRSxRQUFRO0NBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIElEX1NQTElUX0ZMQUc6ICdfX0lEX1NQTElUX18nLFxuICBRVUlMTF9VUExPQURfSE9MREVSX0NMQVNTX05BTUU6ICdxdWlsbC11cGxvYWQtcHJvZ3Jlc3MnLFxuICBERUZBVUxUX1NUWUxFUzogYFxuICAgIC5xdWlsbC1wcm9ncmVzcy13cmFwcGVyIHtcbiAgICAgIGhlaWdodDogMC4yNXJlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2VmZTY7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAucXVpbGwtcHJvZ3Jlc3Mtd3JhcHBlciBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5xdWlsbC1wcm9ncmVzcyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xuICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzc0JhciAxMHMgZWFzZS1pbi1vdXQ7XG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwcm9ncmVzc0JhciB7XG4gICAgICAwJSB7IHdpZHRoOiAwOyB9XG4gICAgICAxMDAlIHsgd2lkdGg6IDEwMCU7IH1cbiAgICB9XG5cbiAgICAuZC1ub25lIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnF1aWxsLXVwbG9hZC1wcm9ncmVzcyB7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgfVxuICBgLFxuICBibG90czoge1xuICAgIHZpZGVvOiAndmlkZW8nLFxuICAgIGltYWdlOiAnaW1hZ2UnLFxuICB9LFxuICBMT0FESU5HX0NMQVNTX05BTUU6ICdxdWlsbC1wcm9ncmVzcy13cmFwcGVyJyxcbiAgTk9ORV9ESVNQTEFZX0NMQVNTX05BTUU6ICdkLW5vbmUnLFxufTtcbiJdfQ==