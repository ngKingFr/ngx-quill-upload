import Quill from 'quill';

var Constants = {
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

class Helper {
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

class BaseHandler {
    constructor(quill, options) {
        this.helpers = new Helper();
        this.quill = quill;
        this.options = options;
        this.range = null;
        new Styled().apply();
        if (this.isNotExistLoading()) {
            const node = document.createElement('div');
            node.innerHTML = this.helpers.loadingHTML();
            this.quill.container.appendChild(node);
        }
        if (typeof this.options.upload !== 'function') {
            console.warn('[Missing config] upload function that returns a promise is required');
        }
        setTimeout(() => {
            if (!this.options.accepts) {
                if (this.handler === Constants.blots.image) {
                    this.options.accepts = ['jpg', 'jpeg', 'png'];
                }
                if (this.handler === Constants.blots.video) {
                    this.options.accepts = ['mp4', 'webm'];
                }
            }
            if (this.handler === Constants.blots.image) {
                this.possibleExtension = new Set(['apng', 'bmp', 'gif', 'ico', 'cur', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'tif', 'tiff', 'webp', 'pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx']);
            }
            if (this.handler === Constants.blots.video) {
                this.possibleExtension = new Set(['mp4', 'webm', '3gp', 'mp4', 'mpeg', 'quickTime', 'ogg']);
            }
            this.allowedFormatRegex = new RegExp('^(' + this.options.accepts.filter((el) => this.possibleExtension.has(el.toLowerCase()))
                .reduce((acc, el, i) => acc.concat(i !== 0 ? `|${el}` : `${el}`), '') + ')$', 'i');
        }, 1);
    }
    applyForToolbar() {
        const toolbar = this.quill.getModule('toolbar');
        this.loading = document.getElementById(`${Constants.ID_SPLIT_FLAG}.QUILL-LOADING`);
        toolbar.addHandler(this.handler, this.selectLocalFile.bind(this));
    }
    selectLocalFile() {
        this.range = this.quill.getSelection();
        this.fileHolder = document.createElement('input');
        this.fileHolder.setAttribute('type', 'file');
        this.fileHolder.setAttribute('accept', `${this.handler}/*`);
        this.fileHolder.onchange = this.fileChanged.bind(this);
        this.fileHolder.click();
    }
    loadFile(context) {
        this.loading.removeAttribute('class');
        this.loading.setAttribute('class', Constants.LOADING_CLASS_NAME);
        const file = context.fileHolder.files[0];
        this.handlerId = this.helpers.generateID();
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
            this.insertBase64Data(fileReader.result, this.handlerId);
        }, false);
        if (!file) {
            console.warn('[File not found] Something was wrong, please try again!!');
            return null;
        }
        fileReader.readAsDataURL(file);
        return { file, handlerId: this.handlerId };
    }
    fileChanged() {
        const { file, handlerId } = this.loadFile(this);
        if (!file) {
            return;
        }
        const extension = file.name.split('.').pop();
        if (!this.isValidExtension(extension)) {
            console.warn('[Wrong Format] Format was wrong, please try with correct format!!');
        }
        if (!this.hasValidMimeType(file.type)) {
            console.warn(`[Incorrect Mime Type] The MIME Type of uploaded file is not ${this.handler}!!`);
        }
        this.embedFile(file, handlerId);
    }
    embedFile(file, handlerId) {
        this.options.upload(file).then((url) => {
            this.insertFileToEditor(url, handlerId);
            this.loading.removeAttribute('class');
            this.loading.setAttribute('class', Constants.NONE_DISPLAY_CLASS_NAME);
        }, (error) => {
            this.loading.removeAttribute('class');
            this.loading.setAttribute('class', Constants.NONE_DISPLAY_CLASS_NAME);
            setTimeout(() => {
                const el = document.getElementById(handlerId);
                el.remove();
            }, 1000);
        });
    }
    insertBase64Data(url, handlerId) {
        const range = this.range;
        this.quill.insertEmbed(range.index, this.handler, `${handlerId}${Constants.ID_SPLIT_FLAG}${url}`);
        const el = document.getElementById(handlerId);
        if (el) {
            el.setAttribute('class', Constants.QUILL_UPLOAD_HOLDER_CLASS_NAME);
        }
    }
    insertFileToEditor(url, handlerId) {
        const el = document.getElementById(handlerId);
        if (el) {
            el.setAttribute('src', url);
            el.removeAttribute('id');
            el.removeAttribute('class');
        }
    }
    isValidExtension(extension) {
        return extension && this.allowedFormatRegex.test(extension);
    }
    hasValidMimeType(type) {
        return type && type.startsWith(this.handler);
    }
    isNotExistLoading() {
        const loading = document.getElementById(`${Constants.ID_SPLIT_FLAG}.QUILL-LOADING`);
        return loading == null;
    }
}

const blotPath = 'formats/image';
const BlockEmbed = Quill.import(blotPath);
const SUPPORTED_ATTRIBUTES = [
    'alt',
    'height',
    'width',
    'style'
];
class ImageBlot extends BlockEmbed {
    static create(value) {
        let id;
        let src;
        if (typeof value === 'object' && !value.url) {
            return super.create();
        }
        const arr = value.url
            ? value.url.split(Constants.ID_SPLIT_FLAG)
            : value.split(Constants.ID_SPLIT_FLAG);
        if (arr.length > 1) {
            id = arr[0];
            src = arr[1];
        }
        else {
            src = value;
        }
        const node = super.create(src);
        if (typeof src === 'string') {
            node.setAttribute('src', src);
        }
        if (typeof src === 'object') {
            node.setAttribute('src', src.url);
        }
        if (id) {
            node.setAttribute('id', id);
        }
        return node;
    }
    static value(node) {
        return {
            alt: node.getAttribute('alt'),
            url: node.getAttribute('src'),
        };
    }
    static formats(domNode) {
        return SUPPORTED_ATTRIBUTES.reduce(function (formats, attribute) {
            if (domNode.hasAttribute(attribute)) {
                formats[attribute] = domNode.getAttribute(attribute);
            }
            return formats;
        }, {});
    }
    format(name, value) {
        if (SUPPORTED_ATTRIBUTES.indexOf(name) > -1) {
            if (value) {
                this.domNode.setAttribute(name, value);
            }
            else {
                this.domNode.removeAttribute(name);
            }
        }
        else {
            super.format(name, value);
        }
    }
}
ImageBlot.tagName = 'img';
ImageBlot.blotName = Constants.blots.image;
ImageBlot.className = 'quill-upload-image';

const blotPath$1 = 'blots/block/embed';
const BlockEmbed$1 = Quill.import(blotPath$1);
class VideoBlot extends BlockEmbed$1 {
    static create(value) {
        let id;
        let src;
        if (typeof value === 'object' && !value.url) {
            return super.create();
        }
        const arr = value.url
            ? value.url.split(Constants.ID_SPLIT_FLAG)
            : value.split(Constants.ID_SPLIT_FLAG);
        if (arr.length > 1) {
            id = arr[0];
            src = arr[1];
        }
        else {
            src = value;
        }
        const node = super.create(src);
        if (typeof src === 'string') {
            node.setAttribute('src', src);
        }
        if (typeof src === 'object') {
            node.setAttribute('src', src.url);
        }
        if (id) {
            node.setAttribute('id', id);
        }
        node.setAttribute('controls', true);
        node.setAttribute('controlsList', 'nodownload');
        node.setAttribute('width', '100%');
        return node;
    }
    static formats(node) {
        const format = {};
        if (node.hasAttribute('height')) {
            format.height = node.getAttribute('height');
        }
        if (node.hasAttribute('width')) {
            format.width = node.getAttribute('width');
        }
        return format;
    }
    static value(node) {
        return node.getAttribute('src');
    }
    format(name, value) {
        if (name === 'height' || name === 'width') {
            if (value) {
                this.domNode.setAttribute(name, value);
            }
            else {
                this.domNode.removeAttribute(name, value);
            }
        }
        else {
            super.format(name, value);
        }
    }
}
VideoBlot.tagName = 'video';
VideoBlot.blotName = Constants.blots.video;
VideoBlot.className = 'quill-upload-video';

class VideoHandler extends BaseHandler {
    constructor(quill, options) {
        super(quill, options);
        this.handler = Constants.blots.video;
        this.applyForToolbar();
        Quill.register('formats/video', VideoBlot);
    }
}

class ImageHandler extends BaseHandler {
    constructor(quill, options) {
        super(quill, options);
        this.handler = Constants.blots.image;
        this.applyForToolbar();
        Quill.register(ImageBlot, true);
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { ImageBlot, ImageHandler, VideoBlot, VideoHandler };
//# sourceMappingURL=ngx-quill-upload.js.map
