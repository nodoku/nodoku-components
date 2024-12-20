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
export function BackgroundsImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        var lng, defaultThemeName, bgColorStyle, bgImageStyle, backgrounds, lightClassName, darkClassName, style;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            lng = props.lng, defaultThemeName = props.defaultThemeName, bgColorStyle = props.bgColorStyle, bgImageStyle = props.bgImageStyle;
            backgrounds = [];
            lightClassName = "light:inline-block dark:hidden " + (defaultThemeName === "light" ? "inline-block" : "hidden");
            darkClassName = "light:hidden dark:inline-block " + (defaultThemeName === "dark" ? "inline-block" : "hidden");
            if ((_a = bgColorStyle === null || bgColorStyle === void 0 ? void 0 : bgColorStyle.css) === null || _a === void 0 ? void 0 : _a.light) {
                backgrounds.push(<div key={"bg-color-css-light"} className={"bg-color-css-light absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ".concat(lightClassName)} style={(_b = bgColorStyle === null || bgColorStyle === void 0 ? void 0 : bgColorStyle.css) === null || _b === void 0 ? void 0 : _b.light}></div>);
            }
            if ((_c = bgColorStyle === null || bgColorStyle === void 0 ? void 0 : bgColorStyle.css) === null || _c === void 0 ? void 0 : _c.dark) {
                backgrounds.push(<div key={"bg-color-css-dark"} className={"bg-color-css-dark absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ".concat(darkClassName)} style={(_d = bgColorStyle === null || bgColorStyle === void 0 ? void 0 : bgColorStyle.css) === null || _d === void 0 ? void 0 : _d.dark}></div>);
            }
            style = {};
            return [2 /*return*/, (<>
            <div className={"nd-bg-image absolute top-0 left-0 right-0 bottom-0 ".concat(bgImageStyle === null || bgImageStyle === void 0 ? void 0 : bgImageStyle.base, " ").concat(bgImageStyle === null || bgImageStyle === void 0 ? void 0 : bgImageStyle.decoration)} style={style}></div>
            <div className={"nd-bg-color absolute top-0 left-0 right-0 bottom-0 ".concat(bgColorStyle === null || bgColorStyle === void 0 ? void 0 : bgColorStyle.base, " ").concat(bgColorStyle === null || bgColorStyle === void 0 ? void 0 : bgColorStyle.decoration)}>
                {backgrounds}
            </div>
        </>)];
        });
    });
}
