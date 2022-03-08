(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('quill')) :
    typeof define === 'function' && define.amd ? define('ngx-quill-upload', ['exports', 'quill'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-quill-upload'] = {}, global.Quill));
}(this, (function (exports, Quill) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Quill__default = /*#__PURE__*/_interopDefaultLegacy(Quill);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var Constants = {
        ID_SPLIT_FLAG: '__ID_SPLIT__',
        QUILL_UPLOAD_HOLDER_CLASS_NAME: 'quill-upload-progress',
        DEFAULT_STYLES: "\n    .quill-progress-wrapper {\n      height: 0.25rem;\n      position: relative;\n      background: #f3efe6;\n      overflow: hidden;\n      margin-top: 0;\n    }\n\n    .quill-progress-wrapper span {\n      display: block;\n      height: 100%;\n    }\n\n    .quill-progress {\n      background-color: #3498db;\n      animation: progressBar 10s ease-in-out;\n      animation-fill-mode:both;\n    }\n\n    @keyframes progressBar {\n      0% { width: 0; }\n      100% { width: 100%; }\n    }\n\n    .d-none {\n      display: none;\n    }\n\n    .quill-upload-progress {\n      opacity: 0.3;\n    }\n  ",
        blots: {
            video: 'video',
            image: 'image',
        },
        LOADING_CLASS_NAME: 'quill-progress-wrapper',
        NONE_DISPLAY_CLASS_NAME: 'd-none',
    };

    var Helper = /** @class */ (function () {
        function Helper() {
            this.id = 0;
            this.prefix = 'QUILL_UPLOAD_HANDLER';
        }
        Helper.prototype.generateID = function () {
            var id = this.id;
            this.id = id + 1;
            return this.prefix + "-" + id;
        };
        Helper.prototype.loadingHTML = function () {
            return "<div id=\"" + Constants.ID_SPLIT_FLAG + ".QUILL-LOADING\">\n                        <span style=\"width:90%;\"><span class=\"quill-progress\">\n                        </span></span>\n                      </div>";
        };
        return Helper;
    }());

    var Styled = /** @class */ (function () {
        function Styled(styles) {
            this.styles = styles;
            this.setUp();
        }
        Styled.prototype.setUp = function () {
            this.eStyle = document.createElement('style');
            this.eStyle.type = 'text/css';
            document.getElementsByTagName('head')[0].appendChild(this.eStyle);
        };
        Styled.prototype.setStyle = function (styles) {
            this.styles = styles;
        };
        Styled.prototype.apply = function () {
            this.eStyle.appendChild(document.createTextNode(this.styles || Constants.DEFAULT_STYLES));
        };
        return Styled;
    }());

    var BaseHandler = /** @class */ (function () {
        function BaseHandler(quill, options) {
            var _this = this;
            this.helpers = new Helper();
            this.quill = quill;
            this.options = options;
            this.range = null;
            new Styled().apply();
            if (this.isNotExistLoading()) {
                var node = document.createElement('div');
                node.innerHTML = this.helpers.loadingHTML();
                this.quill.container.appendChild(node);
            }
            if (typeof this.options.upload !== 'function') {
                console.warn('[Missing config] upload function that returns a promise is required');
            }
            setTimeout(function () {
                if (!_this.options.accepts) {
                    if (_this.handler === Constants.blots.image) {
                        _this.options.accepts = ['jpg', 'jpeg', 'png'];
                    }
                    if (_this.handler === Constants.blots.video) {
                        _this.options.accepts = ['mp4', 'webm'];
                    }
                }
                if (_this.handler === Constants.blots.image) {
                    _this.possibleExtension = new Set(['apng', 'bmp', 'gif', 'ico', 'cur', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'tif', 'tiff', 'webp', 'pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx']);
                }
                if (_this.handler === Constants.blots.video) {
                    _this.possibleExtension = new Set(['mp4', 'webm', '3gp', 'mp4', 'mpeg', 'quickTime', 'ogg']);
                }
                _this.allowedFormatRegex = new RegExp('^(' + _this.options.accepts.filter(function (el) { return _this.possibleExtension.has(el.toLowerCase()); })
                    .reduce(function (acc, el, i) { return acc.concat(i !== 0 ? "|" + el : "" + el); }, '') + ')$', 'i');
            }, 1);
        }
        BaseHandler.prototype.applyForToolbar = function () {
            var toolbar = this.quill.getModule('toolbar');
            this.loading = document.getElementById(Constants.ID_SPLIT_FLAG + ".QUILL-LOADING");
            toolbar.addHandler(this.handler, this.selectLocalFile.bind(this));
        };
        BaseHandler.prototype.selectLocalFile = function () {
            this.range = this.quill.getSelection();
            this.fileHolder = document.createElement('input');
            this.fileHolder.setAttribute('type', 'file');
            this.fileHolder.setAttribute('accept', this.handler + "/*");
            this.fileHolder.onchange = this.fileChanged.bind(this);
            this.fileHolder.click();
        };
        BaseHandler.prototype.loadFile = function (context) {
            var _this = this;
            this.loading.removeAttribute('class');
            this.loading.setAttribute('class', Constants.LOADING_CLASS_NAME);
            var file = context.fileHolder.files[0];
            this.handlerId = this.helpers.generateID();
            var fileReader = new FileReader();
            fileReader.addEventListener('load', function () {
                _this.insertBase64Data(fileReader.result, _this.handlerId);
            }, false);
            if (!file) {
                console.warn('[File not found] Something was wrong, please try again!!');
                return null;
            }
            fileReader.readAsDataURL(file);
            return { file: file, handlerId: this.handlerId };
        };
        BaseHandler.prototype.fileChanged = function () {
            var _a = this.loadFile(this), file = _a.file, handlerId = _a.handlerId;
            if (!file) {
                return;
            }
            var extension = file.name.split('.').pop();
            if (!this.isValidExtension(extension)) {
                console.warn('[Wrong Format] Format was wrong, please try with correct format!!');
            }
            if (!this.hasValidMimeType(file.type)) {
                console.warn("[Incorrect Mime Type] The MIME Type of uploaded file is not " + this.handler + "!!");
            }
            this.embedFile(file, handlerId);
        };
        BaseHandler.prototype.embedFile = function (file, handlerId) {
            var _this = this;
            this.options.upload(file).then(function (url) {
                _this.insertFileToEditor(url, handlerId);
                _this.loading.removeAttribute('class');
                _this.loading.setAttribute('class', Constants.NONE_DISPLAY_CLASS_NAME);
            }, function (error) {
                _this.loading.removeAttribute('class');
                _this.loading.setAttribute('class', Constants.NONE_DISPLAY_CLASS_NAME);
                setTimeout(function () {
                    var el = document.getElementById(handlerId);
                    el.remove();
                }, 1000);
            });
        };
        BaseHandler.prototype.insertBase64Data = function (url, handlerId) {
            var range = this.range;
            this.quill.insertEmbed(range.index, this.handler, "" + handlerId + Constants.ID_SPLIT_FLAG + url);
            var el = document.getElementById(handlerId);
            if (el) {
                el.setAttribute('class', Constants.QUILL_UPLOAD_HOLDER_CLASS_NAME);
            }
        };
        BaseHandler.prototype.insertFileToEditor = function (url, handlerId) {
            var el = document.getElementById(handlerId);
            if (el) {
                el.setAttribute('src', url);
                el.removeAttribute('id');
                el.removeAttribute('class');
            }
        };
        BaseHandler.prototype.isValidExtension = function (extension) {
            return extension && this.allowedFormatRegex.test(extension);
        };
        BaseHandler.prototype.hasValidMimeType = function (type) {
            return type && type.startsWith(this.handler);
        };
        BaseHandler.prototype.isNotExistLoading = function () {
            var loading = document.getElementById(Constants.ID_SPLIT_FLAG + ".QUILL-LOADING");
            return loading == null;
        };
        return BaseHandler;
    }());

    var blotPath = 'formats/image';
    var BlockEmbed = Quill__default['default'].import(blotPath);
    var SUPPORTED_ATTRIBUTES = [
        'alt',
        'height',
        'width',
        'style'
    ];
    var ImageBlot = /** @class */ (function (_super) {
        __extends(ImageBlot, _super);
        function ImageBlot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageBlot.create = function (value) {
            var id;
            var src;
            if (typeof value === 'object' && !value.url) {
                return _super.create.call(this);
            }
            var arr = value.url
                ? value.url.split(Constants.ID_SPLIT_FLAG)
                : value.split(Constants.ID_SPLIT_FLAG);
            if (arr.length > 1) {
                id = arr[0];
                src = arr[1];
            }
            else {
                src = value;
            }
            var node = _super.create.call(this, src);
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
        };
        ImageBlot.value = function (node) {
            return {
                alt: node.getAttribute('alt'),
                url: node.getAttribute('src'),
            };
        };
        ImageBlot.formats = function (domNode) {
            return SUPPORTED_ATTRIBUTES.reduce(function (formats, attribute) {
                if (domNode.hasAttribute(attribute)) {
                    formats[attribute] = domNode.getAttribute(attribute);
                }
                return formats;
            }, {});
        };
        ImageBlot.prototype.format = function (name, value) {
            if (SUPPORTED_ATTRIBUTES.indexOf(name) > -1) {
                if (value) {
                    this.domNode.setAttribute(name, value);
                }
                else {
                    this.domNode.removeAttribute(name);
                }
            }
            else {
                _super.prototype.format.call(this, name, value);
            }
        };
        return ImageBlot;
    }(BlockEmbed));
    ImageBlot.tagName = 'img';
    ImageBlot.blotName = Constants.blots.image;
    ImageBlot.className = 'quill-upload-image';

    var blotPath$1 = 'blots/block/embed';
    var BlockEmbed$1 = Quill__default['default'].import(blotPath$1);
    var VideoBlot = /** @class */ (function (_super) {
        __extends(VideoBlot, _super);
        function VideoBlot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VideoBlot.create = function (value) {
            var id;
            var src;
            if (typeof value === 'object' && !value.url) {
                return _super.create.call(this);
            }
            var arr = value.url
                ? value.url.split(Constants.ID_SPLIT_FLAG)
                : value.split(Constants.ID_SPLIT_FLAG);
            if (arr.length > 1) {
                id = arr[0];
                src = arr[1];
            }
            else {
                src = value;
            }
            var node = _super.create.call(this, src);
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
        };
        VideoBlot.formats = function (node) {
            var format = {};
            if (node.hasAttribute('height')) {
                format.height = node.getAttribute('height');
            }
            if (node.hasAttribute('width')) {
                format.width = node.getAttribute('width');
            }
            return format;
        };
        VideoBlot.value = function (node) {
            return node.getAttribute('src');
        };
        VideoBlot.prototype.format = function (name, value) {
            if (name === 'height' || name === 'width') {
                if (value) {
                    this.domNode.setAttribute(name, value);
                }
                else {
                    this.domNode.removeAttribute(name, value);
                }
            }
            else {
                _super.prototype.format.call(this, name, value);
            }
        };
        return VideoBlot;
    }(BlockEmbed$1));
    VideoBlot.tagName = 'video';
    VideoBlot.blotName = Constants.blots.video;
    VideoBlot.className = 'quill-upload-video';

    var VideoHandler = /** @class */ (function (_super) {
        __extends(VideoHandler, _super);
        function VideoHandler(quill, options) {
            var _this = _super.call(this, quill, options) || this;
            _this.handler = Constants.blots.video;
            _this.applyForToolbar();
            Quill__default['default'].register('formats/video', VideoBlot);
            return _this;
        }
        return VideoHandler;
    }(BaseHandler));

    var ImageHandler = /** @class */ (function (_super) {
        __extends(ImageHandler, _super);
        function ImageHandler(quill, options) {
            var _this = _super.call(this, quill, options) || this;
            _this.handler = Constants.blots.image;
            _this.applyForToolbar();
            Quill__default['default'].register(ImageBlot, true);
            return _this;
        }
        return ImageHandler;
    }(BaseHandler));

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ImageBlot = ImageBlot;
    exports.ImageHandler = ImageHandler;
    exports.VideoBlot = VideoBlot;
    exports.VideoHandler = VideoHandler;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-quill-upload.umd.js.map
