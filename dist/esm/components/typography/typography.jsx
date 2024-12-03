var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { mergeTheme, NdContentImage, NdCallToAction } from "nodoku-core";
import { HighlightedCodeImpl } from "../highlighted-code/highlighted-code";
import { typographyDefaultTheme } from "./typography-theme";
import { highlightedCodeDefaultThemeImpl } from "../highlighted-code/highlighted-code-theme";
export function TypographyImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        function renderElement(elem, i, t) {
            return __awaiter(this, void 0, void 0, function () {
                var imgElem, imgText, key, pText, pText, pText, pText, pText, pText, pText, pText, pText, codeText, imgText, listText, listText, imgText;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            imgElem = undefined;
                            if (!(elem.translatedText instanceof NdContentImage)) return [3 /*break*/, 2];
                            imgText = elem.translatedText;
                            return [4 /*yield*/, imageProvider({ url: t(imgText.url), alt: (imgText.alt ? t(imgText.alt) : "N/A") })];
                        case 1:
                            imgElem = _c.sent();
                            _c.label = 2;
                        case 2:
                            key = "typo-".concat(i);
                            if (!(elem.htmlElem.rawTagName === "h1")) return [3 /*break*/, 3];
                            pText = elem.translatedText;
                            // console.log("this is ptext in elem.htmlElem.rawTagName === \"h1\"", pText, t(pText))
                            // return <h1 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
                            return [2 /*return*/, <h1 key={key} className={elem.htmlElem.classNames}> {t(pText)} </h1>];
                        case 3:
                            if (!(elem.htmlElem.rawTagName === "h2")) return [3 /*break*/, 4];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h2 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: t(pText) }}/>];
                        case 4:
                            if (!(elem.htmlElem.rawTagName === "h3")) return [3 /*break*/, 5];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h3 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: t(pText) }}/>];
                        case 5:
                            if (!(elem.htmlElem.rawTagName === "h4")) return [3 /*break*/, 6];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h4 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: t(pText) }}/>];
                        case 6:
                            if (!(elem.htmlElem.rawTagName === "h5")) return [3 /*break*/, 7];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h5 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: t(pText) }}/>];
                        case 7:
                            if (!(elem.htmlElem.rawTagName === "h6")) return [3 /*break*/, 8];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h6 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: t(pText) }}/>];
                        case 8:
                            if (!(elem.htmlElem.rawTagName === "p")) return [3 /*break*/, 9];
                            if (elem.translatedText instanceof NdCallToAction) {
                                pText = elem.translatedText;
                                return [2 /*return*/, <p key={key}><a className={elem.htmlElem.classNames} href={t(pText.ctaUrl)}>|{t(pText.ctaTitle || pText.ctaUrl)}|</a></p>];
                            }
                            else {
                                pText = elem.translatedText;
                                return [2 /*return*/, <p key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: t(pText) }}/>];
                            }
                            return [3 /*break*/, 13];
                        case 9:
                            if (!(elem.htmlElem.rawTagName === "blockquote")) return [3 /*break*/, 10];
                            pText = elem.translatedText;
                            return [2 /*return*/, <blockquote key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: t(pText) }}/>];
                        case 10:
                            if (!(elem.htmlElem.rawTagName === "pre")) return [3 /*break*/, 12];
                            codeText = elem.translatedText;
                            return [4 /*yield*/, HighlightedCodeImpl({
                                    code: codeText,
                                    theme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultThemeImpl,
                                    defaultThemeName: defaultThemeName
                                })];
                        case 11: return [2 /*return*/, (<div key={key} className={"".concat((_a = effectiveTheme.preContainer) === null || _a === void 0 ? void 0 : _a.base, " ").concat((_b = effectiveTheme.preContainer) === null || _b === void 0 ? void 0 : _b.decoration)}>
                    {_c.sent()}
                </div>)];
                        case 12:
                            if (elem.htmlElem.rawTagName === "figure") {
                                imgText = elem.translatedText;
                                return [2 /*return*/, (<figure key={key} className={elem.htmlElem.classNames}>
                    {/*<img src={imgElem} alt={imgText.alt ? t(imgText.alt) : "N/A"}/>*/}
                    {imgElem}
                    {imgText.title && <figcaption dangerouslySetInnerHTML={{ __html: t(imgText.title) }}/>}
                </figure>)];
                            }
                            else if (elem.htmlElem.rawTagName === "ol") {
                                listText = elem.translatedText;
                                return [2 /*return*/, (<ol className={elem.htmlElem.classNames}>
                    {listText.items.map(function (item) { return <li key={"".concat(key, "-").concat(item.key)} dangerouslySetInnerHTML={{ __html: t(item) }}/>; })}
                </ol>)];
                            }
                            else if (elem.htmlElem.rawTagName === "ul") {
                                listText = elem.translatedText;
                                return [2 /*return*/, (<ul className={elem.htmlElem.classNames}>
                    {listText.items.map(function (item) { return <li key={"".concat(key, "-").concat(item.key)} dangerouslySetInnerHTML={{ __html: t(item) }}/>; })}
                </ul>)];
                            }
                            else if (elem.htmlElem.rawTagName === "img") {
                                imgText = elem.translatedText;
                                return [2 /*return*/, <img key={key} className={elem.htmlElem.classNames} src={t(imgText.url)} alt={imgText.alt ? t(imgText.alt) : "N/A"} title={imgText.title ? t(imgText.title) : ""}/>];
                            }
                            else if (elem.htmlElem.rawTagName === "table") {
                                return [2 /*return*/, <table key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: elem.htmlElem.innerHTML }}/>];
                            }
                            else if (elem.htmlElem.rawTagName === "hr") {
                                return [2 /*return*/, <hr key={key}/>];
                            }
                            _c.label = 13;
                        case 13: return [2 /*return*/, <></>];
                    }
                });
            });
        }
        var componentIndex, content, theme, themes, lng, imageProvider, i18nextProvider, defaultThemeName, effectiveTheme, block, t;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    componentIndex = props.componentIndex, content = props.content, theme = props.theme, themes = props.themes, lng = props.lng, imageProvider = props.imageProvider, i18nextProvider = props.i18nextProvider, defaultThemeName = props.defaultThemeName;
                    effectiveTheme = mergeTheme(theme, typographyDefaultTheme);
                    if (themes.length > 0) {
                        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme);
                    }
                    block = content[0];
                    return [4 /*yield*/, i18nextProvider(lng)];
                case 1:
                    t = (_e.sent()).t;
                    return [4 /*yield*/, Promise.all(block.htmlElements.map(function (elem, i) { return renderElement(elem, i, t); }))];
                case 2: 
                // console.log("received t from i18nextProvider", t, lng)
                return [2 /*return*/, (<div className={"".concat((_a = effectiveTheme.containerStyle) === null || _a === void 0 ? void 0 : _a.base, " ").concat((_b = effectiveTheme.containerStyle) === null || _b === void 0 ? void 0 : _b.decoration)}>
            <div className={"".concat((_c = effectiveTheme.contentContainerStyle) === null || _c === void 0 ? void 0 : _c.base, " ").concat((_d = effectiveTheme.contentContainerStyle) === null || _d === void 0 ? void 0 : _d.decoration)}>
                {_e.sent()}
            </div>
        </div>)];
            }
        });
    });
}
