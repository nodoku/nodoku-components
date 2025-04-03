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
import { mergeTheme, ts, NdCode, NdContentImage, NdTranslatableText, NdCallToAction } from "nodoku-core";
import { HighlightedCodeImpl } from "../highlighted-code/highlighted-code";
import { typographyDefaultTheme } from "./typography-theme";
import { highlightedCodeDefaultThemeImpl } from "../highlighted-code/highlighted-code-theme";
// import {NdLink} from "nodoku-core";
export function TypographyImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        function renderElement(elem, i, t) {
            return __awaiter(this, void 0, void 0, function () {
                var imgElem, imgText, key, pText, pText, pText, pText, pText, pText, pText, pText, pText, codeText, imgText, listText, listText, imgText;
                var _this = this;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            imgElem = undefined;
                            if (!(elem.translatedText instanceof NdContentImage)) return [3 /*break*/, 2];
                            imgText = elem.translatedText;
                            return [4 /*yield*/, imageProvider({ url: t(imgText.url).__html, alt: (imgText.alt ? t(imgText.alt) : "N/A") })];
                        case 1:
                            imgElem = _c.sent();
                            _c.label = 2;
                        case 2:
                            key = "typo-".concat(i);
                            if (!(elem.htmlElem.rawTagName === "h1")) return [3 /*break*/, 3];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h1 key={"typography-h1-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)}/>];
                        case 3:
                            if (!(elem.htmlElem.rawTagName === "h2")) return [3 /*break*/, 4];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h2 key={"typography-h2-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)}/>];
                        case 4:
                            if (!(elem.htmlElem.rawTagName === "h3")) return [3 /*break*/, 5];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h3 key={"typography-h3-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)}/>];
                        case 5:
                            if (!(elem.htmlElem.rawTagName === "h4")) return [3 /*break*/, 6];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h4 key={"typography-h4-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)}/>];
                        case 6:
                            if (!(elem.htmlElem.rawTagName === "h5")) return [3 /*break*/, 7];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h5 key={"typography-h5-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)}/>];
                        case 7:
                            if (!(elem.htmlElem.rawTagName === "h6")) return [3 /*break*/, 8];
                            pText = elem.translatedText;
                            return [2 /*return*/, <h6 key={"typography-h6-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)}/>];
                        case 8:
                            if (!(elem.htmlElem.rawTagName === "p")) return [3 /*break*/, 9];
                            if (elem.translatedText instanceof NdCallToAction) {
                                pText = elem.translatedText;
                                return [2 /*return*/, <p key={"typography-cta-".concat(key)}>|<a className={elem.htmlElem.classNames} href={t(pText.ctaUrl).__html} dangerouslySetInnerHTML={t(pText.ctaTitle || pText.ctaUrl)}/>|</p>];
                            }
                            else {
                                pText = elem.translatedText;
                                return [2 /*return*/, <p key={"typography-p-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)}/>];
                            }
                            return [3 /*break*/, 18];
                        case 9:
                            if (!(elem.htmlElem.rawTagName === "blockquote")) return [3 /*break*/, 10];
                            pText = elem.translatedText;
                            return [2 /*return*/, <blockquote key={"typography-bq-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)}/>];
                        case 10:
                            if (!(elem.htmlElem.rawTagName === "pre")) return [3 /*break*/, 12];
                            codeText = elem.translatedText;
                            return [4 /*yield*/, HighlightedCodeImpl({
                                    key: "".concat(key, "-code-").concat(i),
                                    code: codeText,
                                    theme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultThemeImpl,
                                    defaultThemeName: defaultThemeName
                                })];
                        case 11: return [2 /*return*/, (<div key={"typography-h1-".concat(key)} className={"".concat((_a = effectiveTheme.preContainer) === null || _a === void 0 ? void 0 : _a.base, " ").concat((_b = effectiveTheme.preContainer) === null || _b === void 0 ? void 0 : _b.decoration)}>
                    {_c.sent()}
                </div>)];
                        case 12:
                            if (!(elem.htmlElem.rawTagName === "figure")) return [3 /*break*/, 13];
                            imgText = elem.translatedText;
                            return [2 /*return*/, (<figure key={"typography-fig-".concat(key)} className={elem.htmlElem.classNames}>
                    {imgElem}
                    {imgText.title && <figcaption dangerouslySetInnerHTML={t(imgText.title)}/>}
                </figure>)];
                        case 13:
                            if (!(elem.htmlElem.rawTagName === "ol")) return [3 /*break*/, 15];
                            listText = elem.translatedText;
                            return [4 /*yield*/, Promise.all(listText.items.map(function (i) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    return [2 /*return*/, drawListItem(key, i)];
                                }); }); }))];
                        case 14: return [2 /*return*/, (<ol key={"typography-ol-".concat(key)} className={elem.htmlElem.classNames}>
                    {_c.sent()}
                </ol>)];
                        case 15:
                            if (!(elem.htmlElem.rawTagName === "ul")) return [3 /*break*/, 17];
                            listText = elem.translatedText;
                            return [4 /*yield*/, Promise.all(listText.items.map(function (i) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    return [2 /*return*/, drawListItem(key, i)];
                                }); }); }))];
                        case 16: return [2 /*return*/, (<ul key={"typography-ul-".concat(key)} className={elem.htmlElem.classNames}>
                    {_c.sent()}
                </ul>)];
                        case 17:
                            if (elem.htmlElem.rawTagName === "img") {
                                imgText = elem.translatedText;
                                return [2 /*return*/, <p key={"typography-img-".concat(key, "-container")} className={ts(effectiveTheme, "imageContainer")}>
                <img key={"typography-img-".concat(key)} className={"".concat(ts(effectiveTheme, "imageStyle"), " ").concat(elem.htmlElem.classNames)} src={t(imgText.url).__html} alt={imgText.alt ? t(imgText.alt).__html : "N/A"} title={imgText.title ? t(imgText.title).__html : ""}/>
            </p>];
                            }
                            else if (elem.htmlElem.rawTagName === "table") {
                                return [2 /*return*/, <table key={"typography-table-".concat(key)} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{ __html: elem.htmlElem.innerHTML }}/>];
                            }
                            else if (elem.htmlElem.rawTagName === "hr") {
                                return [2 /*return*/, <hr key={"typography-hr-".concat(key)}/>];
                            }
                            _c.label = 18;
                        case 18: return [2 /*return*/, <></>];
                    }
                });
            });
        }
        function drawListItem(key, item) {
            return __awaiter(this, void 0, void 0, function () {
                var inner, pText, codeText, listText;
                var _this = this;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!item.subList) return [3 /*break*/, 1];
                            return [2 /*return*/, <li key={"".concat(key, "-").concat(item.text.key)} dangerouslySetInnerHTML={t(item.text)}/>];
                        case 1:
                            inner = void 0;
                            if (!(item.subList instanceof NdTranslatableText)) return [3 /*break*/, 2];
                            pText = item.subList;
                            inner = <p key={"typography-p-".concat(key)} dangerouslySetInnerHTML={t(pText)}/>;
                            return [3 /*break*/, 6];
                        case 2:
                            if (!(item.subList instanceof NdCode)) return [3 /*break*/, 4];
                            codeText = item.subList;
                            return [4 /*yield*/, HighlightedCodeImpl({
                                    key: "".concat(key, "-code"),
                                    code: codeText,
                                    theme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultThemeImpl,
                                    defaultThemeName: defaultThemeName
                                })];
                        case 3:
                            inner = <div key={"typography-h1-".concat(key)} className={"".concat((_a = effectiveTheme.preContainer) === null || _a === void 0 ? void 0 : _a.base, " ").concat((_b = effectiveTheme.preContainer) === null || _b === void 0 ? void 0 : _b.decoration)}>
                            {_c.sent()}
                        </div>;
                            return [3 /*break*/, 6];
                        case 4:
                            listText = item.subList;
                            return [4 /*yield*/, Promise.all(listText.items.map(function (i) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    return [2 /*return*/, drawListItem(key, i)];
                                }); }); }))];
                        case 5:
                            inner = (<ul key={"typography-ul-".concat(key)}>
                        {_c.sent()}
                    </ul>);
                            _c.label = 6;
                        case 6: return [2 /*return*/, <li key={"".concat(key, "-").concat(item.text.key)}><div dangerouslySetInnerHTML={t(item.text)}/>{inner}</li>];
                    }
                });
            });
        }
        var componentIndex, content, theme, themes, lng, imageProvider, i18nextTrustedHtmlProvider, defaultThemeName, effectiveTheme, block, t;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    componentIndex = props.componentIndex, content = props.content, theme = props.theme, themes = props.themes, lng = props.lng, imageProvider = props.imageProvider, i18nextTrustedHtmlProvider = props.i18nextTrustedHtmlProvider, defaultThemeName = props.defaultThemeName;
                    effectiveTheme = mergeTheme(theme, typographyDefaultTheme);
                    if (themes.length > 0) {
                        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme);
                    }
                    block = content[0];
                    return [4 /*yield*/, i18nextTrustedHtmlProvider(lng)];
                case 1:
                    t = (_a.sent()).t;
                    return [4 /*yield*/, Promise.all(block.htmlElements.map(function (elem, i) { return renderElement(elem, i, t); }))];
                case 2: 
                // console.log("received t from i18nextProvider", t, lng)
                return [2 /*return*/, (<div className={"".concat(ts(effectiveTheme, "containerStyle"))}>
            <div className={"".concat(ts(effectiveTheme, "contentContainerStyle"))}>
                {_a.sent()}
            </div>
        </div>)];
            }
        });
    });
}
